FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig.build.json ./
COPY src ./src

EXPOSE 4000

RUN npm install

CMD npm run start:dev
