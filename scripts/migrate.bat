@echo off
echo Выполнение миграций базы данных...
docker exec laravel php artisan migrate --force

if %errorLevel% equ 0 (
    echo Миграции успешно применены!
) else (
    echo Ошибка при выполнении миграций!
)
pause