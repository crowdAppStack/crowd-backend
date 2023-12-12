#!/bin/sh
color_text() {
    local color=$1
    local text=$2

    case $color in
        "red")
            echo "----------------------------------------"
            echo "\033[31m$text\033[0m"
            echo "----------------------------------------"
            ;;
        "green")
            echo "----------------------------------------"
            echo "\033[32m$text\033[0m"
            echo "----------------------------------------"
            ;;
        "blue")
            echo "----------------------------------------"
            echo "\033[34m$text\033[0m"
            echo "----------------------------------------"
            ;;
        "yellow")
            echo "----------------------------------------"
            echo "\033[33m$text\033[0m"
            echo "----------------------------------------"
            ;;
        *)
            echo "$text"
            ;;
    esac
}

# Install dependencies
color_text "blue" "Installing dependencies"
composer install --no-interaction --no-dev --prefer-dist

# Run database migrations
color_text "blue" "Running database migrations"
php artisan migrate --force

# Create symbolic link
color_text "blue" "Creating symbolic link"
php artisan storage:link

# Clear cache
color_text "blue" "Clearing cache"
php artisan cache:clear && php artisan config:clear

# Optimize the application
color_text "blue" "Optimizing the application"
php artisan optimize

