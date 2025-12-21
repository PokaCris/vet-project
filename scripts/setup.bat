@echo off
echo ========================================
echo VetClinic Project Setup
echo ========================================

echo.
echo 1. Installing frontend dependencies...
cd frontend
call npm install
call npm run build
cd ..
echo Frontend built successfully!

echo.
echo 2. Creating .env file...
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
    echo .env file created!
)

echo.
echo 3. Installing Laravel dependencies...
cd backend
call composer install
cd ..
echo Laravel dependencies installed!

echo.
echo 4. Stopping and removing any conflicting containers...
docker rm -f laravel 2>nul
docker rm -f nginx 2>nul
docker rm -f adminer 2>nul
docker rm -f db 2>nul

docker-compose down 2>nul

echo Conflicting containers removed!

echo.
echo 5. Starting Docker containers...
docker-compose up -d --build
echo Containers starting...

echo.
echo 6. Waiting 20 seconds for containers to start...
timeout /t 20 /nobreak >nul

echo.
echo 7. Generating Laravel application key...
docker exec laravel php artisan key:generate --force
echo Application key generated!

echo.
echo 8. Creating sessions table...
docker exec laravel php artisan session:table
docker exec laravel php artisan migrate --path=database/migrations/*_create_sessions_table.php
echo Sessions table created!

echo.
echo 9. Running database migrations...
docker exec laravel php artisan migrate --force
echo Database migrations completed!

echo.
echo 10. Seeding database with test data...
docker exec laravel php artisan db:seed --force
echo Test data added!

echo.
echo ========================================
echo SETUP COMPLETED!
echo.
echo Open in browser:
echo http://localhost:8000
echo.
echo Database admin:
echo http://localhost:8080
echo.
echo Test users:
echo 1. ivanov@example.com / password123
echo 2. petrova@example.com / password123
echo 3. sidorov@example.com / password123
echo ========================================
pause