FROM php:7.4.1-fpm
# timezone
ARG Asia/Tokyo

COPY ./docker/php/php.ini /usr/local/etc/php/
COPY ./backend/ /var/www/backend/
COPY install-composer.sh /

WORKDIR /var/www/backend

RUN apt-get update && \
    apt-get -y install \
    git \
    zip \
    unzip \
    vim \
    && docker-php-ext-install pdo_mysql bcmath

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
