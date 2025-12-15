@echo off
echo ========================================
echo Установка проекта VetClinic (Windows)
echo ========================================

@REM node --version
@REM npm --version 
@REM composer --version 
@REM docker --version 

echo.
echo 1. Установка зависимостей фронтенда...
cd frontend
call npm install
call npm install axios
call npm run build
cd ..

echo.
echo 2. Проверка папки public Laravel...
if exist "backend\public\index.php" (
    echo ✓ Файл index.php найден
) else (
    echo ✗ ВНИМАНИЕ: index.php не найден!
    echo Убедитесь что Laravel установлен правильно
    pause
)

echo.
echo 3. Установка зависимостей Laravel...
cd backend
call composer install
call composer dump-autoload
cd ..

echo.
echo 4. Копирование .env файла...
if not exist "backend\.env" (
    echo Создаем файл .env с настройками...
    
    (
        echo APP_NAME=VetClinic
        echo APP_ENV=local
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
        echo.
        echo API_RATE_LIMIT=1000
    ) > backend\.env
    
    echo ✓ Файл .env создан с базовыми настройками
) else (
    echo Файл .env уже существует
)

echo.
echo 5. Запуск Docker контейнеров...
docker-compose up -d

echo.
echo 6. Генерация ключа приложения...
docker exec laravel php artisan key:generate --force

echo.
echo 7. Применение миграций базы данных...
call scripts\migrate.bat

echo.
echo 8. Создание таблицы сессий...
call scripts\session.bat

echo.
echo ========================================
echo УСТАНОВКА ЗАВЕРШЕНА!
echo.
echo Откройте в браузере:
echo http://localhost:8000
echo.
echo База данных (Adminer):
echo http://localhost:8080
echo.
echo ========================================
pause