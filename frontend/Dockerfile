FROM node:alpine

RUN apk add bash
RUN yarn global add typescript

WORKDIR /usr/app
COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]
