FROM python:3.7.2-alpine3.9

LABEL name="atomspace" version="1.0.0"

ENV NODE_ENV "development"

COPY ./ /src

WORKDIR /src

RUN apk add --no-cache --virtual .build-deps build-base \
    linux-headers jpeg-dev zlib-dev
RUN pip install -r requirements.txt
RUN python manage.py collectstatic

#"uwsgi", \
            #    "--plugins", "python3", \
            #    "--protocol", "uwsgi", \
            #    "--wsgi", "backend/TestApp/wsgi:application"