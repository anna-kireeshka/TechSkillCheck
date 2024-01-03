
# Stage 1: Build the React application
FROM node:18-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

#RUN echo "window.REACT_APP_API = '${REACT_APP_API}';" > /app/build/config.js

FROM node:18-alpine as serve-stage

RUN npm install -g serve

COPY --from=build-stage /app/build /app
# Copy the entrypoint script into the image
COPY entrypoint.sh /app/entrypoint.sh

# Give execution rights to the entrypoint script
RUN chmod +x /app/entrypoint.sh
EXPOSE 8080

#ENTRYPOINT ["entrypoint.sh"]
#CMD ["serve", "-s", "app", "-l", "8080"]

ENTRYPOINT ["sh", "/app/entrypoint.sh"]