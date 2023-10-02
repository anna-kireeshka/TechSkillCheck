FROM node:16-slim as builder

WORKDIR /app

ENV PATH="/app/node_modules/.bin:$PATH"

COPY package*.json ./
COPY .babelrc ./

RUN npm install
#RUN npm install react-scripts -g
#RUN npm i -g webpack webpack-cli
COPY . .
COPY webpack.config.js ./
RUN npm run build

FROM node:16-alpine

WORKDIR /app
COPY --from=builder /app/build /app/package*.json /app/.babelrc ./
RUN npm install && \
    npm cache clean --force

EXPOSE 3000
#COPY webpack.config.js ./
CMD ["npm", "start"]


#CMD [ "npm", "run", "start-prod"]