FROM node:10.15.3-alpine

LABEL name="atomspace" version="1.0.0"

ENV NODE_ENV "development"

WORKDIR /app

COPY ./ /app

RUN npm i

RUN npm rebuild node-sass

EXPOSE 3000

ENTRYPOINT ["node", "scripts/start.js"]
