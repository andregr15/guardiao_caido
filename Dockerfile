FROM node:12-alpine3.11

RUN mkdir -p /app

WORKDIR '/app'

COPY . .

RUN yarn
