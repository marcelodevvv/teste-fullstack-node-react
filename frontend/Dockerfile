FROM node:alpine

RUN apk add bash

WORKDIR /usr/app
COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]
