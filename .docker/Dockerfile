
FROM node:16-alpine

WORKDIR /app

EXPOSE 3000

COPY package*.json ./
COPY . .
COPY ./.docker/entrypoint.sh /usr/local/bin/entrypoint.sh

ENTRYPOINT ["sh", "/usr/local/bin/entrypoint.sh"]