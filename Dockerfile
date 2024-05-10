FROM node:18-alpine AS build-stage

# Устанавливаем необходимые зависимости
RUN apk add --update --no-cache git

# Создаем рабочую директорию
WORKDIR /app

# Копируем файлы приложения
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Добавляем файлы приложения
COPY . .

# Собираем приложение
RUN npm run build

FROM nginx:1.25.0-alpine

# Копируем собранные файлы приложения
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]