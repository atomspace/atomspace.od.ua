python manage.py collectstatic
./wait-for-it.sh -h postgres -p 5432
python manage.py migrate
echo "from django.contrib.auth.models import User; User.objects.create_superuser('$INITIAL_USER_NAME', '$INITIAL_USER_EMAIL', '$INITIAL_USER_PASSWORD')" | python manage.py shell
gunicorn -w 4 config.wsgi -b 0.0.0.0:8000