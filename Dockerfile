FROM node:14.17.6-alpine3.13
WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm i

COPY tsconfig.json .
COPY tsconfig.app.json .
COPY webpack.config.ts .
COPY src src

EXPOSE 3000

CMD npm start
