#!/bin/bash
echo "Creating sessions table..."
docker exec laravel php artisan session:table
docker exec laravel php artisan migrate --path=database/migrations/*_create_sessions_table.php

if [ $? -eq 0 ]; then
    echo "Sessions table created"
else
    echo "Error creating sessions table"
fi