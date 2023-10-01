# Запуск проекта

```
docker-compose up -d --build
```

# env

```
# url для запроса к апи 
REACT_APP_API=http://localhost:8080/api/v1

# SECRET_KEY для капчи
REACT_APP_RECAPCHA_SECRET_KEY=xxx

# SITE_KEY для капчи
REACT_APP_RECAPCHA_SITE_KEY=xxx
```

# Структура проекта

`/components` - Общие компоненты

`/components/UI` - Общие UI компоненты (кнопки, элементы формы)

`/context` - Контекст для приложения (язык, тема)

`/pages` - Страницы

`/shared` - Общие модули - переводы, апи, переиспользуемые функции, типизация

`/store` - Хранилище приложения