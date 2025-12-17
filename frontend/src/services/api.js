let csrfReady = false;

async function fetchCsrf() {
    await fetch("/api/sanctum/csrf-cookie", {
        credentials: "include",
    });
    csrfReady = true;
    console.log('CSRF cookie получен');
}

async function ensureCsrf() {
    if (!csrfReady) {
        await fetchCsrf();
    }
}

export async function api(url, options = {}) {
    const method = options.method?.toUpperCase() || 'GET';
    
    if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(method)) {
        await ensureCsrf();
    }

    const response = await fetch(url, {
        ...options,
        credentials: "include",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            ...options.headers,
        }
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