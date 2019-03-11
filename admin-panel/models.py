from django.db import models

class Merch(models.Model):
    name = models.CharField(max_length=70)
    price = models.IntegerField()
    avatar_url = models.ImageField(upload_to='merch_photos')
    creared_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(null=True)

class News(models.Model):
    header = models.CharField(max_length=225)
    content = models.TextField()
    news_picture_url = models.ImageField(upload_to='news_photos')
    creared_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(null=True)