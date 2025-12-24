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
call composer dump-autoload
cd ..
echo Laravel dependencies installed!

echo.
echo 4. Stopping and removing any conflicting containers...
docker-compose down 2>nul
docker rm -f nginx laravel adminer db 2>nul
echo Conflicting containers removed!

echo.
echo 5. Starting Docker containers...
docker-compose up -d --build
echo Containers starting...

echo.
echo 6. Waiting 20 seconds for containers to start...
timeout /t 20 /nobreak >nul

echo.
echo 7. Clearing Laravel config cache...
docker exec laravel php artisan config:clear 2>nul
echo Config cache cleared!

echo.
echo 8. Generating Laravel application key...
docker exec laravel php artisan key:generate --force
echo Application key generated!

echo.
echo 9. Restarting Laravel container...
docker restart laravel 2>nul
if errorlevel 1 (
    docker-compose restart php-fpm 2>nul
)
echo Laravel restarted!

echo.
echo 10. Creating sessions table...
docker exec laravel php artisan session:table 2>nul
echo Sessions migration created!

echo.
echo 11. Setting up database...
docker exec laravel php artisan migrate:fresh --force --seed 2>nul
echo Database setup complete!

echo.
echo ========================================
echo SETUP COMPLETED!
echo.
echo Open in browser: http://localhost:8000
echo Database admin: http://localhost:8080
echo.
echo Test users:
echo 1. ivanov@example.com / password123
echo 2. petrova@example.com / password123
echo ========================================
pause