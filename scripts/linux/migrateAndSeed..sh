#!/bin/bash

echo "========================================"
echo "VetClinic Database Setup (Migrate + Seed)"
echo "========================================"

echo
echo "Running migrations and seeding..."
docker exec laravel php artisan migrate:fresh --force --seed

if [ $? -eq 0 ]; then
    echo "Database migrations and seeding complete!"
    echo
    echo "Test users:"
    echo "1. ivanov@example.com / password123"
    echo "2. petrova@example.com / password123"
    echo "3. sidorov@example.com / password123"
else
    echo "Error setting up database!"
fi

echo "========================================"