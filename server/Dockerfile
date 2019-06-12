FROM python:3.7.2-alpine3.9

LABEL name="atomspace" version="1.0.0"

ENV NODE_ENV "development"

WORKDIR /app

COPY ./ /app

RUN apk add --virtual .build-deps build-base postgresql-dev \
    linux-headers jpeg-dev zlib-dev

RUN pip install --upgrade pip

RUN pip install -r requirements.txt
#RUN python manage.py collectstatic

RUN rm /usr/local/lib/python3.7/site-packages/django/contrib/auth/views.py
RUN rm /usr/local/lib/python3.7/site-packages/django/contrib/admin/sites.py
RUN rm /usr/local/lib/python3.7/site-packages/django/contrib/admin/templates/admin/login.html
COPY ./csrf_exempt/views.py /usr/local/lib/python3.7/site-packages/django/contrib/auth
COPY ./csrf_exempt/sites.py /usr/local/lib/python3.7/site-packages/django/contrib/admin
COPY ./csrf_exempt/login.html /usr/local/lib/python3.7/site-packages/django/contrib/admin/templates/admin

#RUN python manage.py makemigrations
#RUN python manage.py migrate

EXPOSE 8000

#ENTRYPOINT ["uwsgi", "uwsgi.config.ini"]
