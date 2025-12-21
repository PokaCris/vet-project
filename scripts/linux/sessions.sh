#!/bin/bash

echo "========================================"
echo "VetClinic - Create Sessions Table"
echo "========================================"

echo
echo "Creating sessions table..."
docker exec laravel php artisan session:table
docker exec laravel php artisan migrate --path=database/migrations/*_create_sessions_table.php --force

if [ $? -eq 0 ]; then
    echo
    echo "Sessions table created successfully!"
else
    echo
    echo "Error creating sessions table!"
fi

echo "========================================"