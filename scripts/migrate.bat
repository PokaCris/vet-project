@echo off
REM Скрипт для применения миграции

echo Applying database migrations...
docker exec laravel php artisan migrate

if %errorLevel% equ 0 (
    echo Migrations applied successfully!
) else (
    echo Failed to apply migrations!
)
pause