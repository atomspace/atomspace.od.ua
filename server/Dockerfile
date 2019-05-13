FROM python:3.7.2-alpine3.9

LABEL name="atomspace" version="1.0.0"

ENV NODE_ENV "development"

WORKDIR /app

COPY ./ /app

#RUN apk add --virtual .build-deps build-base \
#    linux-headers jpeg-dev zlib-dev uwsgi-python3
#
#RUN pip install --upgrade pip
#
#
#EXPOSE 8000
##
##CMD [ "uwsgi", "--socket", "0.0.0.0:8000", \
##               "--uid", "uwsgi", \
##               "--plugins", "python3", \
##               "--protocol", "uwsgi", \
##               "--wsgi", "backend/TestApp/wsgi:application" ]
#
#ENTRYPOINT ["python3", "backend/manage.py", "runserver"]

# RUN npm i
RUN apk add --virtual .build-deps build-base \
    linux-headers jpeg-dev zlib-dev

RUN pip install --upgrade pip

RUN pip install -r requirements.txt

EXPOSE 8000

# Тут вызов команды что запускается когда происходит docker run, все что выше этой команды запускается при docker build.
# ENTRYPOINT ["node", "scripts/start.js"]
ENTRYPOINT ["python3", "backend/manage.py", "runserver", "0.0.0.0:8000"]
