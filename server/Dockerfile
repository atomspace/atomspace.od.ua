FROM python:3.7.2-alpine3.9

LABEL name="atomspace" version="1.0.0"

ENV NODE_ENV "development"

WORKDIR /app

COPY ./ /app

RUN apk add --no-cache --virtual .build-deps build-base \
    linux-headers jpeg-dev zlib-dev uwsgi-python3

RUN pip install --upgrade pip

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000

CMD [ "uwsgi", "--socket", "0.0.0.0:8000", \
               "--uid", "uwsgi", \
               "--plugins", "python3", \
               "--protocol", "uwsgi", \
               "--wsgi", "backend/TestApp/wsgi:application" ]
