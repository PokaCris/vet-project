import axios from 'axios';

const api = axios.create({
    baseURL: '/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});


api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 422) {
            // Валидационные ошибки от Laravel
            return Promise.reject({
                type: 'validation',
                errors: error.response.data.errors
            });
        }

        if (error.code === 'ECONNABORTED') {
            return Promise.reject(new Error('Таймаут запроса'));
        }

        if (!error.response) {
            return Promise.reject(new Error('Нет соединения с сервером'));
        }

        return Promise.reject(error);
    }
);

export default api;