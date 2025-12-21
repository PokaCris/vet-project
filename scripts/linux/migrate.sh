#!/bin/bash
echo "Running database migrations..."
docker exec laravel php artisan migrate --force

if [ $? -eq 0 ]; then
    echo "Migrations applied successfully!"
else
    echo "Error applying migrations!"
fi