FROM python:3.7.2-alpine3.9

MAINTAINER AtomSpace Website
LABEL name="atomspace" version="1.0.0"

ENV NODE_ENV "development"

WORKDIR /server

COPY ./ /server

RUN apk add --no-cache --virtual .build-deps build-base \
    linux-headers jpeg-dev zlib-dev
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000

CMD gunicorn TestApp.wsgi:application --bind 127.0.0.1:8000 --workers 3

ENTRYPOINT ["python3", "backend/manage.py", "runserver"]