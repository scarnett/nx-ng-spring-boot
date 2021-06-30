# Build
FROM node:16.3-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN mkdir -p ./dist/client
RUN npm run build

# Run
FROM nginx:1.20.0-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist/client /usr/share/nginx/html
EXPOSE 80
