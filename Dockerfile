FROM node:10.15.3-alpine

MAINTAINER AtomSpace Website
LABEL name="atomspace" version="1.0.0"

ENV NODE_ENV "development"

WORKDIR /app

COPY src /app

# RUN npm i 

EXPOSE 3000

# ENTRYPOINT ["npm", "start"]