import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';


export default defineConfig({
    plugins: [react()],

    // Корневая директория с исходными файлами
    root: path.resolve(__dirname),

    // Настройки сервера разработки
    server: {
        port: 3000,
        open: true, // автоматически открывать браузер
        cors: true,
    },

    // Настройки сборки
    publicDir: false,
    build: {
        outDir: path.resolve(__dirname, 'public'),
        chunkSizeWarningLimit: 1000,
        emptyOutDir: true,
        watch: {
            usePolling: true,
            interval: 1000,
        },
    },

    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: [
                    'import',
                    'mixed-decls',
                    'color-functions',
                    'global-builtin',
                ],
            },
        },
    },
})