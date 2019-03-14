FROM alpine:3.8

MAINTAINER AtomSpace Website
LABEL name="atomspace" version="1.0.0"

ENV NODE_ENV "development"

EXPOSE 3000:3000

WORKDIR /root

RUN apk update
RUN apk add nodejs npm git
RUN git clone https://github.com/atomspace/atomspace.od.ua.git ~/atomspace
RUN npm i --prefix ~/atomspace

CMD npm run start --prefix ~/atomspace