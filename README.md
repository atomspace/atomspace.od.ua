[![CircleCI](https://circleci.com/gh/atomspace/atomspace.od.ua.svg?style=svg)](https://circleci.com/gh/atomspace/atomspace.od.ua)
[![dependencies Status](https://david-dm.org/atomspace/atomspace.od.ua/status.svg)](https://david-dm.org/atomspace/atomspace.od.ua)
[![devDependencies Status](https://david-dm.org/atomspace/atomspace.od.ua/dev-status.svg)](https://david-dm.org/atomspace/atomspace.od.ua?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/atomspace/atomspace.od.ua/badge.svg?targetFile=package.json)](https://snyk.io/test/github/atomspace/atomspace.od.ua?targetFile=package.json)

# Atom Space public site

## **Development**

### Client

**Requirenments**

```
NODE_ENV=development //Set 'production' if its production

#Main urls to 'media' and 'api'
REACT_APP_MEDIA_URL=https://admin.atomspace-test.com/media/
REACT_APP_API_URL=https://admin.atomspace-test.com/api/v1
```

```
npm install
npm run start
```

### Server

#### Requirenments

Install manually to host machine

```
pip3 install -r requirements.txt
```

#### Start server

```
cd ./server
python3 manage.py runserver
```

## **Production** (Docker)

Preinstall:

- docker
- node (latest version)
- python 3 version

### Django (Server)

#### Prebuild

```
$ mkdir /usr/local/share/postgresql
$ cp ./server/.env.example ./server/.env
$ cp ./server/configure.sh.example ./server/configure.sh

$ mkdir ./server/logs
```

Check file `./server/.env` and `./server/configure.sh`
to correct all config

**Env file descirption**

```
SECRET_KEY=SECRET_KEY // Secret key for hash user passwords

#Main mailbox from where messages will be sent
EMAIL_HOST_USER=atomspace.info@gmail.com // Mail user
EMAIL_HOST_PASSWORD=askmefromadministration // Mail password

EMAIL_TO=test@test.com // Additional email where all mails will dublicates

#Database config
DB_NAME=atomspace.od.ua // Name of database
DB_USER=admin // database user
DB_PASSWORD=changeme // database user password
DB_PORT=5432 // database port
DB_HOST=postgres // database main host
DB_ENGINE=django.db.backends.postgresql_psycopg2 // dont touch

#Dublicating info for postgres docker container
POSTGRES_USER=the_same_as_DB_NAME
POSTGRES_PASSWORD=the_same_as_DB_PASSWORD
POSTGRES_DB=the_same_as_DB_NAME

#User admin credentials
INITIAL_USER_NAME=atomspace
INITIAL_USER_EMAIL=atomspace.info@gmail.com
INITIAL_USER_PASSWORD=ineedmorespace
```

```
$ sudo docker-compose -f docker-compose.yml up -d --build
```

### React (Client)

To deploy client first you need to build then to move build to your website folder of nginx

```
$ cp ./client/.env.example ./client/.env
$ cd client
$ npm install
```

Check file `./client/.env` to correct all config from example `./client/.env.example`

```
$ npm run build
$ cp -R build/* /var/www/{name_of_site}.com/
```

## Nginx

### Installing and configure Nginx

```
$ sudo apt-get install nginx
$ nginx start
```

Config nginx

```
$ vim /etc/nginx/sites-available/atomspace.od.ua
```

```
server {
        listen 80;
        return 301 https://$host$request_uri;
}

server  {

        # SSL configuration
        #
        listen 443;
        ssl on;
        # listen [::]:443 ssl default_server;

        ssl_certificate /home/ubuntu/ssl/atomspace-test.com.crt;
        ssl_certificate_key /home/ubuntu/ssl/atomspace-test.com-key.pem;

        root /var/www/atomspace.od.ua/;

        index index.html index.htm index.nginx-debian.html;

        server_name atomspace-test.com www.atomspace-test.com;

        location / {
                try_files $uri $uri/ =404;
        }

}

server {
        listen 443;
        ssl on;
        ssl_certificate /home/ubuntu/ssl/admin.atomspace-test.com.crt;
        ssl_certificate_key /home/ubuntu/ssl/admin.atomspace-test.com-key.pem;

        server_name  admin.atomspace-test.com www.admin.atomspace-test.com;

        location /static/ {
                alias /home/ubuntu/atomspace.od.ua/server/static/;
        }

        location /media/ {
                alias /home/ubuntu/atomspace.od.ua/server/media/;
        }

        location / {
                proxy_pass http://atomspace-test.com:8000;
                proxy_set_header Host $http_host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
}
```

- create symlink to `/etc/nginx/sites-enabled` folder
- copy your ssls to `/home/ubuntu/ssl/`
  - you must have 2 `.crt` and 2 `.pem` files for `admin.*.com` and `*.com`
- reload nginx `nginx -s reload`

## Updating ssl certificates

For client side:
```
$ sudo certbot certonly --webroot -w /var/www/atomspace-test.com -d www.atomspace-test.com,atomspace-test.com
```

For admin:
```
$ letsencrypt-auto --test-cert --nginx --domain admin.atomspace-test.com
```