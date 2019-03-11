import os
import json
import shutil
import calendar
import datetime
import bcrypt
import requests

from django.conf import settings
from django.contrib.auth import logout as django_logout
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import HttpResponseRedirect, render
from django.http import  HttpResponse
from django.core import serializers
from django.contrib import messages

from .forms import MerchForm, NewsForm
from .models import Merch, News

def calculate_age(born):
    today = datetime.date.today()
    return today.year - born.year - ((today.month, today.day) < (born.month, born.day))


@login_required
def merch(request):
    if request.method == 'POST':
        f = MerchForm(request.POST, request.FILES)
        if f.is_valid():
            merch = Merch()
            merch.name = request.POST['name']
            merch.price = request.POST['price']
            merch.avatar_url = request.FILES['photo']
            merch.save()
            return HttpResponseRedirect('#')
    else:
        context = {
            'form': MerchForm(),
            'merch': Merch.objects.all()
        }
        return render(request, 'merch/index.html', context)

@login_required
def news(request):
    if request.method == 'POST':
        f = NewsForm(request.POST, request.FILES)
        if f.is_valid():
            content = ' '.join(request.POST['content'].split('\r\n'))
            new = News()
            new.header = request.POST['header']
            new.content = content
            new.news_picture_url = request.FILES['photo']
            new.save()
            return HttpResponseRedirect('/news')
    else:
        context = {
            'form': NewsForm(),
            'news': News.objects.all()
        }
        return render(request, 'news/index.html', context)

@login_required
def delete_article(request, pk):
    n = News.objects.get(id=pk)
    os.remove('{}/{}'.format(settings.MEDIA_ROOT, n.news_picture_url))
    n.delete()
    return HttpResponseRedirect('/news')

@login_required
def delete_merch(request, pk):
    m = Merch.objects.get(id=pk)
    os.remove('{}/{}'.format(settings.MEDIA_ROOT, m.avatar_url))
    m.delete()
    return HttpResponseRedirect('/merch')

@login_required
def index(request):
    return HttpResponseRedirect('/merch')

@login_required
def logout(request):
    django_logout(request)
    return HttpResponseRedirect('/login')