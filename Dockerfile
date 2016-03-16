FROM node:5.8.0
MAINTAINER Painperdu <contact@painperdu.io>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

CMD ["npm", "start"]
