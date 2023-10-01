FROM node:18-slim as builder

WORKDIR /app

COPY package*.json ./
COPY .babelrc ./
RUN npm i && \
    npm cache clean --force
COPY . .
RUN npm run build

FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app/build /app/package*.json /app/.babelrc ./
RUN npm install --only=production --omit=dev --no-package-lock && \
    npm cache clean --force &&  \
    rm -rf node_modules

EXPOSE 3000

CMD ["npm", "start"]
