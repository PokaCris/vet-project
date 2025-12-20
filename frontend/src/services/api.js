let csrfReady = false;

async function fetchCsrf() {
    const response = await fetch("/api/sanctum/csrf-cookie", {
        credentials: "include",
    });
    csrfReady = true;
    console.log('CSRF cookie получен, статус:', response.status);
    return response;
}

async function ensureCsrf() {
    if (!csrfReady) {
        await fetchCsrf();
    }
}

function getXsrfToken() {
    const match = document.cookie.match(/(?:^|;)\s*XSRF-TOKEN\s*=\s*([^;]+)/);
    if (!match) return null;
    
    const encodedToken = match[1];
    try {
        return decodeURIComponent(encodedToken);
    } catch {
        return encodedToken;
    }
}

export async function api(url, options = {}) {
    const method = options.method?.toUpperCase() || 'GET';
    
    if (method !== 'GET') {
        await ensureCsrf();
    }

    const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        ...options.headers,
    };
    
    if (method !== 'GET') {
        const xsrfToken = getXsrfToken();
        if (xsrfToken) {
            headers['X-XSRF-TOKEN'] = xsrfToken;
            console.log('X-XSRF-TOKEN добавлен:', xsrfToken.substring(0, 50) + '...');
        }
    }

    console.log(`API ${method} ${url}`, { headers });

    const response = await fetch(url, {
        ...options,
        credentials: "include",
        headers,
    });

    if (response.status === 419) {
        console.log('CSRF токен устарел, обновляем...');
        csrfReady = false;
        await fetchCsrf();
        return api(url, options);
    }

    if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || `HTTP ${response.status}`);
    }

    return response.json();
}

export async function apiPost(url, data) {
    return api(url, {
        method: "POST",
        body: JSON.stringify(data)
    });
}

export async function apiGet(url) {
    return api(url, { method: "GET" });
}

export async function apiPut(url, data) {
    return api(url, {
        method: "PUT",
        body: JSON.stringify(data)
    });
}

export async function apiDelete(url) {
    return api(url, { method: "DELETE" });
}