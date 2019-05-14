FROM python:3.7.2-alpine3.9

LABEL name="atomspace" version="1.0.0"

ENV NODE_ENV "development"

WORKDIR /app

COPY ./ /app

RUN apk add --virtual .build-deps build-base \
    linux-headers jpeg-dev zlib-dev uwsgi-python3

RUN pip install --upgrade pip

RUN pip install -r requirements.txt

EXPOSE 8000

ENTRYPOINT ["uwsgi", "uwsgi.config.ini"]
