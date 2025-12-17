// context/AuthContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { apiGet, apiPost } from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Получение текущего пользователя
    const fetchUser = async () => {
        try {
            const userData = await apiGet("/api/auth/me");
            setUser(userData.user);
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    // Вход пользователя
    const login = async (email, password) => {
        try {
            const result = await apiPost("/api/auth/login", { email, password });
            setUser(result.user);
            return { success: true, data: result };
        } catch (error) {
            return {
                success: false,
                error: error.message || 'Ошибка входа'
            };
        }
    };

    // Регистрация пользователя
    const register = async (userData) => {
        try {
            const result = await apiPost("/api/auth/register", userData);
            setUser(result.user);
            return { success: true, data: result };
        } catch (error) {
            return {
                success: false,
                error: error.message || 'Ошибка регистрации'
            };
        }
    };

    // Выход пользователя
    const logout = async () => {
        try {
            await apiPost("/api/auth/logout");
            setUser(null);
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    // Инициализация при загрузке
    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            login,
            register,
            logout,
            refreshUser: fetchUser
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
}