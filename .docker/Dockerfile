FROM node:16-slim as builder

WORKDIR /app
ENV PATH="/app/node_modules/.bin:$PATH"
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build --silent

FROM node:16-alpine

WORKDIR /app
COPY  --from=builder /app/build /app/package*.json ./
RUN npm install --only=production --omit=dev && \
    npm install -g serve && \
    npm cache clean --force

EXPOSE 3000

CMD ["serve", "build"]
