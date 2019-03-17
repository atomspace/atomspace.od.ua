FROM python:3.7.2-alpine3.9

MAINTAINER AtomSpace Website
LABEL name="atomspace" version="1.0.0"

ENV NODE_ENV "development"

WORKDIR /server

COPY ./ /server

# RUN npm i 

# Тут вызов команды что запускается когда происходит docker run, все что выше этой команды запускается при docker build.
# ENTRYPOINT ["node", "scripts/start.js"]