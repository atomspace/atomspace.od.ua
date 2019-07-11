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
cp ./server/.env.production.example ./server/.env.production
cp ./server/createsuperuser.sh.example ./server/createsuperuser.sh

mkdir ./server/logs
touch ./server/logs/logs.txt
```
Check file ```./server/.env.production``` and ```./server/createsuperuser.sh```
 to correct all config

##### Run
```
sudo docker-compose -f docker-compose.prod.yml up -d --build
```
If you cannot reach the website of admin panel - it might be that migrations started before DB was configured, try to stop and start docker-compose again, but before that remove folder ```./server/static/``` for using previous container.

#### React (Client)

##### Build

To deploy client first you need to build then to move build to your website folder of nginx  

```
cp ./client/.env.example ./client/.env
cd client
npm install
```
Check file ```./client/.env```
 to correct all config
```
npm run build
cp -R build/* /var/www/{name_of_site}.com/
```
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
- create symlink to ```/etc/nginx/sites-enabled``` folder
- copy your ssls to ```/home/ubuntu/ssl/```
    - you must have 2 ```.crt``` and 2 ```.pem``` files for ```admin.*.com``` and ```*.com```
- reload nginx ```nginx -s reload```
