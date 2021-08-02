FROM node:alpine

RUN apk add bash
RUN yarn add global typescript
RUN yarn add global ts-node-dev

WORKDIR /usr/app
COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3333

CMD ["yarn", "dev"]
