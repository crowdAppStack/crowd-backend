#!/bin/bash

# Install dependencies
composer install --no-interaction --no-dev --prefer-dist

# Generate application key
php artisan key:generate

# Run database migrations
php artisan migrate --fresh --seed

# Create symbolic link
php artisan storage:link

# Clear cache
php artisan cache:clear && php artisan config:clear

# Optimize the application
php artisan optimize

# Build assets
yarn install
yarn build
