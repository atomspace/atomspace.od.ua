echo "[LOG]: Running collect static"
python manage.py collectstatic --noinput
echo "[LOG]: Checking postgres connection by wait-it-for"
./wait-for-it.sh $DB_HOST:5432
echo "[LOG]: Postgres connection success"
echo "[LOG]: Migrating sql tables"
python manage.py migrate
echo "[LOG]: Creating superuser"
echo "from django.contrib.auth.models import User; User.objects.create_superuser('$INITIAL_USER_NAME', '$INITIAL_USER_EMAIL', '$INITIAL_USER_PASSWORD')" | python manage.py shell
echo "[LOG]: Starting server by gunicorn"
gunicorn -w 4 config.wsgi -b 0.0.0.0:8000