#!/bin/bash
echo "Seeding database with test data..."
docker exec laravel php artisan db:seed --force

if [ $? -eq 0 ]; then
    echo "Test data added successfully!"
else
    echo "Error seeding database!"
fi