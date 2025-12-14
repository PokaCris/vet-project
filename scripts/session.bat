@echo off
echo Создание таблицы сессий...

REM Создаем миграцию для сессий
docker exec laravel php artisan session:table

REM Выполняем только миграцию сессий
docker exec laravel php artisan migrate --path=database/migrations/*_create_sessions_table.php

echo ✓ Таблица сессий создана