FROM node:16 as  builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --silent && npm prune --production


FROM node:16-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install -g serve && \
    npm cache clean --force
COPY --from=builder /app/build ./build

EXPOSE 3000
CMD ["serve", "-s" ,"build"]