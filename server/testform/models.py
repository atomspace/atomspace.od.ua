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
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    number = models.IntegerField()
    date = models.CharField(max_length=20)
    created_at = models.DateField(default=timezone.now)

    def __str__(self):
        return self.name
