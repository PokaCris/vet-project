@echo off
echo Creating sessions table...

docker exec laravel php artisan session:table

docker exec laravel php artisan migrate --path=database/migrations/*_create_sessions_table.php


if %errorLevel% equ 0 (
    echo Sessions table created
) else (
    echo Error Sessions table created!
)
pause
