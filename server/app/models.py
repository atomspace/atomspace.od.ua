from django.db import models
import datetime

class Mentor(models.Model):
    name = models.CharField(max_length=60)
    email = models.EmailField(max_length=30)
    phone = models.CharField(max_length=30)
    information = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name


class Resident(models.Model):
    name = models.CharField(max_length=60)
    birthday = models.CharField(max_length=10, default=datetime.datetime.now().date())
    email = models.EmailField(max_length=30)
    phone = models.CharField(max_length=30)
    information = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Merch(models.Model):
    name = models.CharField(max_length=70, unique=True)
    cost = models.IntegerField()
    avatar_url = models.ImageField(upload_to='merch_photos')
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(null=True, auto_now=True)

    def __str__(self):
        return '{} Size: {}'.format(self.name, self.price)

class News(models.Model):
    header = models.CharField(max_length=225, unique=True)
    content = models.TextField()
    news_picture_url = models.ImageField(upload_to='news_photos')
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(null=True, auto_now=True)

    def __str__(self):
        return self.header
    
class Order(models.Model):
    full_name = models.CharField(max_length=40)
    phone = models.CharField(max_length=10)
    city = models.CharField(max_length=30)
    np_mail = models.CharField(max_length=4)
    merch_name = models.CharField(max_length=30)
    merch_cost = models.IntegerField()
    merch_size = models.CharField(max_length=4)
    getFromAtom = models.BooleanField()
    created_time = models.DateTimeField(default=None)

    def __str__(self):
        return self.full_name