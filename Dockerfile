FROM node:18-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run dockerbuild

FROM node:18-alpine
COPY package.json ./
COPY package-lock.json ./
COPY --from=build /app/build /
RUN npm ci
EXPOSE 8080
CMD [ "node", "index.js" ]