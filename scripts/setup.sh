#!/bin/bash

echo "========================================"
echo "VetClinic Project Setup (Linux/Mac)"
echo "========================================"

echo
echo "1. Installing frontend dependencies..."
cd frontend
npm install
npm run build
cd ..
echo "Frontend built successfully!"

echo
echo "2. Creating .env file..."
if [ ! -f "backend/.env" ]; then
    cat > backend/.env << 'EOF'
APP_NAME=VetClinic
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=vet_db
DB_USERNAME=vet_user
DB_PASSWORD=password

SESSION_DRIVER=database
SESSION_LIFETIME=120
SANCTUM_STATEFUL_DOMAINS=localhost:8000
EOF
    echo ".env file created!"
fi

echo
echo "3. Installing Laravel dependencies..."
cd backend
composer install
composer dump-autoload
cd ..
echo "Laravel dependencies installed!"

echo
echo "4. Setting permissions (Linux/Mac)..."
sudo chmod -R 777 backend/storage/logs/
sudo chmod -R 777 backend/storage/framework/
echo "Permissions set!"

echo
echo "5. Stopping and removing any conflicting containers..."
docker-compose down 2>/dev/null
docker rm -f nginx laravel adminer db 2>/dev/null
echo "Conflicting containers removed!"

echo
echo "6. Starting Docker containers..."
docker-compose up -d --build
echo "Containers starting..."

echo
echo "7. Waiting 20 seconds for containers to start..."
sleep 20

echo
echo "8. Clearing Laravel config cache..."
docker exec laravel php artisan config:clear 2>/dev/null
echo "Config cache cleared!"

echo
echo "9. Generating Laravel application key..."
docker exec laravel php artisan key:generate --force
echo "Application key generated!"

echo
echo "10. Restarting Laravel container..."
docker restart laravel 2>/dev/null || docker-compose restart php-fpm 2>/dev/null
echo "Laravel restarted!"

echo
echo "11. Creating sessions table..."
docker exec laravel php artisan session:table 2>/dev/null
echo "Sessions migration created!"

echo
echo "12. Setting up database..."
docker exec laravel php artisan migrate:fresh --force --seed 2>/dev/null
echo "Database setup complete!"

echo
echo "========================================"
echo "SETUP COMPLETED!"
echo
echo "Open in browser: http://localhost:8000"
echo "Database admin: http://localhost:8080"
echo
echo "Test users:"
echo "1. ivanov@example.com / password123"
echo "2. petrova@example.com / password123"
echo "========================================"