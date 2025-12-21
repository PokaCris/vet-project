@echo off
echo Заполнение базы данных тестовыми данными...
docker exec laravel php artisan db:seed --force

if %errorLevel% equ 0 (
    echo Тестовые данные успешно добавлены!
) else (
    echo Ошибка при заполнении базы данных!
)
pause