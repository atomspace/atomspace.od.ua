# Atom Space public site

# Development

### Client

``` npm run start```

### Server

#### Requirenments
install 
```Django```
```django-rest-framework```
```django-cors-headers```
```Pillow```
#### Start server

```cd ./server```
```python3 manage.py runserver```


# Server production

## Docker 

### Django (Server)

#### Build
```docker build ./server/docker --tag atomspace-server```

#### Run
```docker run -d --name atomspace-server -p 81:8080 atomspace-server```

### React (Client)

#### Build
```docker build ./client/docker --tag atomspace-client```

#### Run
```docker run -d --name atomspace-client -p 80:3000 atomspace-client```
