FROM node:10.15.3-alpine

LABEL name="atomspace" version="1.0.0"

ENV NODE_ENV "development"

WORKDIR /src

COPY ./ /src

RUN npm i

ENTRYPOINT ["node", "scripts/start.js"]
