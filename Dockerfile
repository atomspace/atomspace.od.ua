FROM node:10.15.3-alpine

MAINTAINER AtomSpace Website
LABEL name="atomspace" version="1.0.0"

ENV NODE_ENV "development"

WORKDIR /client

COPY client /client

RUN npm i 

ENTRYPOINT ["node", "scripts/start.js"]