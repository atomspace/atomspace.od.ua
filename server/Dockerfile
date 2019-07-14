FROM python:3.7.2-alpine3.9

LABEL name="atomspace" version="1.0.0"

WORKDIR /app

COPY ./ /app

RUN apk add --virtual .build-deps build-base bash postgresql-dev \
    linux-headers jpeg-dev zlib-dev

RUN pip install --upgrade pip

RUN pip install -r requirements.txt

EXPOSE 8000
