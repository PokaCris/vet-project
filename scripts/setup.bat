@echo off
echo ========================================
echo Установка проекта VetClinic
echo ========================================

echo.
echo 1. Проверка установленных пакетов...
echo.
echo 1.1 Проверка Node.js и npm...
node --version >nul 2>&1
if errorlevel 1 (
    echo ОШИБКА: Node.js не установлен!
    pause
    exit /b 1
)
echo ✓ Node.js установлен

npm --version >nul 2>&1
if errorlevel 1 (
    echo ОШИБКА: npm не установлен!
    pause
    exit /b 1
)
echo ✓ npm установлен

echo.
echo 1.2 Проверка Docker...
docker --version >nul 2>&1
if errorlevel 1 (
    echo ОШИБКА: Docker не установлен!
    pause
    exit /b 1
)
echo ✓ Docker установлен

echo.
echo 2. Установка зависимостей фронтенда...
cd frontend
call npm install
if errorlevel 1 (
    echo ОШИБКА: Не удалось установить зависимости фронтенда
    cd ..
    pause
    exit /b 1
)

call npm run build
if errorlevel 1 (
    echo ОШИБКА: Не удалось собрать фронтенд
    cd ..
    pause
    exit /b 1
)
cd ..
echo ✓ Фронтенд собран

echo.
echo 3. Создание .env файла...
if not exist "backend\.env" (
    (
        echo APP_NAME=VetClinic
        echo APP_ENV=local
        echo APP_KEY=
        echo APP_DEBUG=true
        echo APP_URL=http://localhost:8000
        echo.
        echo DB_CONNECTION=mysql
        echo DB_HOST=db
        echo DB_PORT=3306
        echo DB_DATABASE=vet_db
        echo DB_USERNAME=vet_user
        echo DB_PASSWORD=password
        echo.
        echo SESSION_DRIVER=database
        echo SESSION_LIFETIME=120
        echo SANCTUM_STATEFUL_DOMAINS=localhost:8000
    ) > backend\.env
    echo ✓ Файл .env создан
)

echo.
echo 4. Установка зависимостей Laravel...
cd backend
call composer install
cd ..
echo ✓ Зависимости Laravel установлены

echo.
echo 5. Запуск Docker контейнеров...
docker-compose up -d --build
if errorlevel 1 (
    echo ОШИБКА: Не удалось запустить контейнеры
    pause
    exit /b 1
)

echo.
echo 6. Ожидание запуска контейнеров...
timeout /t 20 /nobreak >nul

echo.
echo 7. Настройка Laravel...
docker exec laravel php artisan key:generate --force
echo ✓ Ключ приложения сгенерирован

echo.
echo 8. Создание таблицы сессий...
docker exec laravel php artisan session:table
docker exec laravel php artisan migrate --path=database/migrations/*_create_sessions_table.php
echo ✓ Таблица сессий создана

echo.
echo 9. Выполнение миграций...
docker exec laravel php artisan migrate --force
echo ✓ Миграции выполнены

echo.
echo 10. Заполнение базы данных...
docker exec laravel php artisan db:seed --force
echo ✓ Тестовые данные добавлены

echo.
echo ========================================
echo УСТАНОВКА ЗАВЕРШЕНА!
echo.
echo Приложение: http://localhost:8000
echo База данных: http://localhost:8080
echo.
echo Тестовые пользователи:
echo 1. ivanov@example.com / password123
echo 2. petrova@example.com / password123  
echo 3. sidorov@example.com / password123
echo ========================================
pause