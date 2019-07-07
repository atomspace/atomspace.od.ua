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
docker-compose -f docker-compose.prod.yml up -d --build
```


Then config postgres and startup user into container.

Config postgres container  
!!! IF YOU HAVE 500 ERROR IN SERVER !!! 
-----------------
```
docker exec --user postgres -ti atomspace_postgres sh
```
Then enter the postgresql by command ```psql```
and then change user settings
```
ALTER USER (user from .env.production) WITH PASSWORD (password from .env.production);
```
-----------------  
After that make migrations and create user
```
docker exec -ti atomspace_server sh
```
To migrate all tables in database.
```
python manage.py migrate
```
To create static folder.
```
python manage.py collectstatic
```
To create superuser for admin panel.
```
python manage.py createsuperuser
```

#### React (Client)

##### Build

To deploy client first you need to build then to move build to your website folder of nginx  
 
```
cp ./client/.env.production.example ./client/.env.production
cd client
npm install
npm run build
cp -R build/* /var/www/{name-of-site}.com/
```
Check file ```./client/.env.production``` and ```./server/.env```
 to correct all config

### Installing and configure Nginx


```
sudo apt-get install nginx
nginx start
```



Config nginx
```
vim /etc/nginx/sites-available/atomspace.od.ua
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

        root /home/ubuntu/atomspace.od.ua/client/build;

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
- create symlink to ```/etc/nginx/sites-enabled``` folder
- copy your ssls to ```/home/ubuntu/ssl/```
    - you must have 2 ```.crt``` and 2 ```.pem``` files for ```admin.*.com``` and ```*.com```
- reload nginx ```nginx -s reload```
