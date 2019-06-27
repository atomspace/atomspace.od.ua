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
pip3 install -r requirements.txt
```

#### Start server

```
cd ./server
python3 manage.py runserver
```


# Server production startup

Preinstall:
- docker
- node (latest version)

### Docker 

#### Django (Server)
##### Prebuild
```
cp ./server/.env.example ./server/.env.production
mkdir /usr/local/share/postgresql
```
Check file ```./server/.env.production``` and correct all config

##### Run
```
docker-compose -f docker-compose.prod.yml up -d
docker-compose -f docker-compose.prod.yml down
```

#### React (Client)

##### Build

To deploy client first you need to build then to move build to your website folder of nginx  
 
```
npm install
npm run build
cp -R build/* /var/www/{name-of-site}.com/
```


### Installing and configure Nginx

```
sudo apt-get install nginx
nginx start
```

### Craete user in admin panel

You need to get inside docker container of django like
```
docker exec -ti atomspace_server sh
```
and then run  
