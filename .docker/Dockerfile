FROM node:18-slim as builder

WORKDIR /app

COPY package*.json ./
RUN npm ci && \
    npm cache clean --force
COPY . .
RUN npm run build

FROM node:18-alpine3.17

WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.babelrc ./.babelrc

RUN npm install --only=production --no-package-lock && \
    npm cache clean --force &&  \
    rm -rf node_modules

EXPOSE 3000

CMD ["npm", "start"]
