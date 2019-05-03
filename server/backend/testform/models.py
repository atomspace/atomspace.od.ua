from django.db import models
from django.utils import timezone

class Mentor(models.Model):
    name = models.CharField(max_length=30)
    number = models.IntegerField()
    email = models.EmailField(max_length=30)
    information = models.CharField(max_length=100)
    created_at = models.DateField(default=timezone.now)
    def __str__(self):
        return self.name


class Resident(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField(max_length=30)
    number = models.IntegerField()
    information = models.CharField(max_length=100)
    created_at = models.DateField(default=timezone.now)

    def __str__(self):
        return self.name

class Merch(models.Model):
    name = models.CharField(max_length=70)
    price = models.IntegerField()
    avatar_url = models.ImageField(upload_to='merch_photos')
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(null=True)

class News(models.Model):
    header = models.CharField(max_length=225)
    content = models.TextField()
    news_picture_url = models.ImageField(upload_to='news_photos')
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(null=True)
    
class Order(models.Model):
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    phone = models.CharField(max_length=13)
    email = models.EmailField(max_length=50)
    merch_name = models.CharField(max_length=70)
    merch_size = models.CharField(max_length=10)
    merch_cost = models.IntegerField()