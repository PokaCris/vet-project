@echo off
echo Running database migrations...
docker exec laravel php artisan migrate --force

if %errorLevel% equ 0 (
    echo Migrations applied successfully!
) else (
    echo Error applying migrations!
)
pause