FROM node:dubnium-slim

ENV NODE_ENV=production

WORKDIR /usr/app

COPY package.json /usr/app/package.json
COPY yarn.lock /usr/app/yarn.lock

RUN yarn install

COPY . /usr/app

RUN yarn build

CMD yarn start
