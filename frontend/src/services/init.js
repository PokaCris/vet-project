import api from './api';

export async function initializeApp() {
    console.log('Инициализация приложения...');

    try {
        const csrfInitialized = await api.initializeCsrf();

        if (!csrfInitialized) {
            console.warn('CSRF токен не инициализирован');
        }

        return csrfInitialized;
    } catch (error) {
        console.error('Ошибка инициализации приложения:', error);
        throw error;
    }
}