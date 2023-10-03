#FROM node:16 as builder
#
#WORKDIR /app
#COPY package*.json ./
#RUN npm install
#COPY . .
#RUN npm run build --silent && npm prune --production
#CMD ["npm", "run" ,"start"]

#FROM node:16-alpine
#
#WORKDIR /app
#COPY package*.json ./
##RUN npm install -g serve && \
##    npm cache clean --force
#COPY --from=builder /app/build ./build
#
#EXPOSE 3000
##CMD ["serve", "-s" ,"build"]
#CMD ["npm", "run" ,"start"]

FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build && npm prune --production

FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html