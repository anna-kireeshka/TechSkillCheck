FROM node:16-slim as builder

WORKDIR /app

ENV PATH="/app/node_modules/.bin:$PATH"

COPY package*.json ./

RUN npm install && \
    npm cache clean --force

COPY . .

RUN npm run build

FROM node:16-alpine

WORKDIR /app
COPY --from=builder /app/build /app/package*.json ./
RUN npm install --only=production --omit=dev && \
    npm cache clean --force

EXPOSE 3000
CMD ["npm", "start"]
