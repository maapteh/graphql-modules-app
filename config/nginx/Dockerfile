# THIS CONTAINER WILL ONLY BE USED DURING DEVELOPMENT
FROM node:dubnium-slim

ENV NODE_ENV=production
ENV IS_DOCKER=true

WORKDIR /usr/app

COPY package.json /usr/app/package.json
COPY yarn.lock /usr/app/yarn.lock

RUN yarn install

COPY . /usr/app

CMD yarn start
