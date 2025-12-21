### Vet-Project

Для развертывания выполните

1. Соберите статику:
```bash
    cd frontend
    npm install
    npm run build
```

- Для linux/mac:
 Создайте папку `public` и убедитесь в доступности редактирования

```bash
    mkdir public
    chmod 755 public
```

2. Создайте .env фаил

- для windows:
```cmd
cd backend
    (
        echo APP_NAME=VetClinic
        echo APP_ENV=local
        echo APP_KEY=
        echo APP_DEBUG=true
        echo APP_URL=http://localhost:8000
        echo.
        echo DB_CONNECTION=mysql
        echo DB_HOST=db
        echo DB_PORT=3306
        echo DB_DATABASE=vet_db
        echo DB_USERNAME=vet_user
        echo DB_PASSWORD=password
        echo.
        echo SESSION_DRIVER=database
        echo SESSION_LIFETIME=120
        echo SANCTUM_STATEFUL_DOMAINS=localhost:8000
    ) > .env
```

- Для linux/mac:
```bash
    cd backend
    cat > .env << 'EOF'
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
```

3. Установите зависимости для backend:

```bash
    cd backend
    composer install
    composer dump-autoload
```

- Для linux/mac:
```bash
   sudo chmod -R 777 storage/logs/
   sudo chmod -R 777 storage/framework/
```

4. Запустите Docker контейнеры:

```bash
    docker compose up -d
```

5. Настройте базу данных:

- для windows:
```cmd
scripts/windows/sessions.bat      # Создать таблицу сессий
scripts/windows/migrate.bat       # Применить миграции
scripts/windows/seed.bat          # Заполнить тестовыми данными
```

- Для linux/mac:
```bash
   # Сделайте скрипты исполняемыми
    chmod +x scripts/linux/*.sh

    # Выполните скрипты
    ./scripts/linux/sessions.sh
    ./scripts/linux/migrate.sh
    ./scripts/linux/seed.sh
```

6. Проверьте результат работы по адресу http://localhost:8000