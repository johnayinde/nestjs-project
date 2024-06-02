FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY tsconfig.build.json ./
COPY src ./src

EXPOSE 4000


CMD npm run start:dev
