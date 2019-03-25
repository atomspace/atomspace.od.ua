FROM python:3.7.2-alpine3.9

MAINTAINER AtomSpace Website
LABEL name="atomspace" version="1.0.0"

ENV NODE_ENV "development"

WORKDIR /server

COPY ./ /server

RUN apk add --no-cache --virtual .build-deps build-base \
    linux-headers jpeg-dev zlib-dev
RUN pip3 install setuptools 
RUN pip3 install Django
RUN pip3 install django-rest-framework
RUN pip3 install django-cors-headers 
RUN pip3 install Pillow 

ENTRYPOINT ["python3", "backend/manage.py", "runserver"]