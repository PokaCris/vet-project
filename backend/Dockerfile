FROM php:8.4.13-fpm
RUN docker-php-ext-install pdo pdo_mysql
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
WORKDIR /var/www/html
COPY composer.json composer.lock ./
RUN composer install --no-interaction
COPY . .
RUN chmod -R 775 storage bootstrap/cache
CMD ["php-fpm"]