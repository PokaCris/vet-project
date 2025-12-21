@echo off
echo ========================================
echo VetClinic - Create Sessions Table
echo ========================================

echo.
echo Creating sessions table...
docker exec laravel php artisan session:table
docker exec laravel php artisan migrate --force

if %errorLevel% equ 0 (
    echo.
    echo Sessions table created successfully!
) else (
    echo.
    echo Error creating sessions table!
)

echo ========================================
pause