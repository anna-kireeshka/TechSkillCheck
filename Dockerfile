
# Stage 1: Build the React application
FROM node:18-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine as serve-stage

RUN npm install -g serve

COPY --from=build-stage /app/build /app

COPY entrypoint.sh /app/entrypoint.sh

RUN chmod +x /app/entrypoint.sh

EXPOSE 8080

ENTRYPOINT ["sh", "/app/entrypoint.sh"]