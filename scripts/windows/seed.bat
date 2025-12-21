@echo off
echo Seeding database with test data...
docker exec laravel php artisan db:seed --force

if %errorLevel% equ 0 (
    echo Test data added successfully!
) else (
    echo Error seeding database!
)
pause