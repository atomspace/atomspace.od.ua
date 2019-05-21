# Atom Space public site

# Development

### Client

``` 
npm run start
```

### Server

#### Requirenments

Install manually to host machine
```
Django
django-rest-framework
django-cors-headers
Pillow
```

#### Start server

```
cd ./server
python3 manage.py runserver
```


# Server production

## Docker 

### Django (Server)

#### Build
```
docker build ./server --tag atomspace_server
```

#### Run
```
docker run -d --name atomspace_server -p 8000:8000 atomspace_server
```

### React (Client)

#### Build

To deploy client first you need to build then to move build to your website folder of nginx  
 
```
npm run build
cp -R build/* /var/www/{name-of-site}.com/
```


## Installing and configure Nginx

```
sudo apt-get install nginx
nginx start
```

## Installing and configure Postgresql

Log in by root to ```psql``` and confirm these commands.
```
CREATE ROLE "admin";
GRANT ALL PRIVILEGES ON DATABASE "atomspace.od.ua" TO "admin";
ALTER ROLE "admin" WITH LOGIN;
```

## Craete user in admin panel

You need to get inside docker container of django like
```
docker exec -ti atomspace_server sh
```
and then run  
