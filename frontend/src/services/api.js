class ApiService {
    constructor() {
        this.baseUrl = '';
        this.isCsrfInitialized = false;
        this.requestQueue = [];
    }

    async initializeCsrf() {
        if (this.isCsrfInitialized) return true;

        try {
            const response = await fetch(`${this.baseUrl}/sanctum/csrf-cookie`, {
                method: 'GET',
                credentials: 'include',
            });

            this.isCsrfInitialized = response.ok;
            console.log('CSRF инициализирован:', this.isCsrfInitialized);
            return this.isCsrfInitialized;
        } catch (error) {
            console.error('Ошибка инициализации CSRF:', error);
            return false;
        }
    }

    async request(endpoint, options = {}) {
        if (!this.baseUrl) {
            this.baseUrl = window.location.origin;
        }

        const url = `${this.baseUrl}/api${endpoint}`;

        const config = {
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        };

        const method = options.method?.toUpperCase() || 'GET';
        
        if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(method)) {
            if (!this.isCsrfInitialized) {
                await this.initializeCsrf();
            }
        }

        try {
            const response = await fetch(url, config);

            if (response.status === 419) {
                console.log('CSRF токен устарел, переинициализируем...');
                this.isCsrfInitialized = false;
                await this.initializeCsrf();
                return this.request(endpoint, options);
            }

            if (!response.ok) {
                try {
                    const errorData = await response.json();

                    if (response.status === 422 && errorData.errors) {
                        return Promise.reject({
                            type: 'validation',
                            errors: errorData.errors,
                            response: response,
                        });
                    }

                    return Promise.reject({
                        message: errorData.message || `HTTP ${response.status}`,
                        response: response,
                        data: errorData
                    });
                } catch (jsonError) {
                    const textError = await response.text();
                    return Promise.reject({
                        message: textError || `HTTP ${response.status}`,
                        response: response
                    });
                }
            }

            if (response.status === 204) {
                return null;
            }

            const data = await response.json();
            return { 
                data: data,
                status: response.status
            };

        } catch (error) {
            if (error.name === 'TypeError') {
                return Promise.reject({
                    message: 'Нет соединения с сервером',
                    code: 'NETWORK_ERROR',
                });
            }

            return Promise.reject(error);
        }
    }

    async get(endpoint) {
        return this.request(endpoint, { method: 'GET' });
    }

    async post(endpoint, data) {
        return this.request(endpoint, { 
            method: 'POST', 
            body: JSON.stringify(data)
        });
    }

    async put(endpoint, data) {
        return this.request(endpoint, { 
            method: 'PUT', 
            body: JSON.stringify(data) 
        });
    }

    async delete(endpoint) {
        return this.request(endpoint, { method: 'DELETE' });
    }

    async getCurrentUser() {
        try {
            const result = await this.get('/auth/me');
            return result.data;
        } catch (error) {
            if (error.response?.status === 401) {
                return null;
            }
            throw error;
        }
    }

    async login(credentials) {
        const result = await this.post('/auth/login', credentials);
        return result.data;
    }

    async register(userData) {
        const result = await this.post('/auth/register', userData);
        return result.data;
    }

    async logout() {
        return this.post('/auth/logout');
    }
}

const api = new ApiService();

export default api;