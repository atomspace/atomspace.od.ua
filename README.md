# Atom Space public site

## Development

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
mkdir /usr/local/share/postgresql
cp ./server/.env.example ./server/.env
cp ./server/.env.production.example ./server/.env.production
```
Check file ```./server/.env.production``` and ```./server/.env```
 to correct all config

##### Run
```
docker-compose -f docker-compose.prod.yml up -d
```


Then config postgres and startup user into container.
```
docker exec -ti atomspace_server sh
```
To migrate all tables in database.
```
python manage.py migrate
```

To create superuser for admin panel.
```
python manage.py createsuperuser
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
