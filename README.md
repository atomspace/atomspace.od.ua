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
```
docker build ./client --tag atomspace-client
```

#### Run
```
docker run -d --name atomspace_client -p 80:3000 atomspace_client
```


## Installing and configure Nginx

```
sudo apt-get install nginx
sudo /etc/init.d/nginx start
``` 
