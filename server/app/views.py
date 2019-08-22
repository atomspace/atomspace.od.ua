import json
import os
import datetime

from django.http import JsonResponse
from django.core import serializers
from django.core.exceptions import ObjectDoesNotExist
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login as django_login, logout as django_logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.shortcuts import HttpResponseRedirect, render
from django.http import HttpResponse
from django.contrib import messages

from .forms import MerchForm, NewsForm, EditMerch, EditNews, LoginForm
from .models import Merch, News, Mentor, Resident, Order
from .utils import EmailThread


@csrf_exempt
def mentors(request):
    if request.method == 'GET':
        mentors_list = json.loads(
            serializers.serialize('json', Mentor.objects.all()))
        for i in mentors_list:
            del i['model']
        return JsonResponse(mentors_list, safe=False)

    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        post = Mentor()
        post.name = data['name']
        post.number = data['number']
        post.email = data['email']
        post.information = data['information']
        post.save()

        # Sending callback email
        subject = 'Request to become a mentor'
        from_email = settings.EMAIL_HOST_USER
        to_email = [data['email']]  # 'atomspace.info@gmail.com'
        contact_message = '''\
        Name: {}
        Phone number: {}
        E-mail: {}
        Info: {}
        '''.format(data['name'], data["number"], data["email"], data["information"])
        EmailThread(subject, contact_message, from_email, to_email).start()

        return JsonResponse({
            "errors": [],
            "success": True,
            "affected": [{
                "statusCode": 200,
                "message": "Mentor created",
                "fields": '[form.cleaned_data]'
            }]
        })
    else:
        return JsonResponse({
            "success": False,
            "errors": [{
                "statusCode": 500,
                "message": "Values is not valid",
                "fields": '[form.errors]'
            }]
        })


@csrf_exempt
def residents(request):
    if request.method == 'GET':
        residents_list = json.loads(
            serializers.serialize('json', Resident.objects.all()))
        for i in residents_list:
            del i['model']
        return JsonResponse(residents_list, safe=False)

    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        post = Resident()
        post.name = data['name']

        birth = data['birth']
        post.birthday = birth
        post.email = data['email']
        post.number = data['number']
        post.information = data['information']
        post.save()

        # Sending callback email
        subject = 'Request to become a resident'
        from_email = settings.EMAIL_HOST_USER
        to_email = [data['email']]  # 'atomspace.info@gmail.com'
        contact_message = '''\
        Name: {}\n
        Birthday: {}\n
        Phone number: {}\n
        E-mail: {}\n
        Info: {}\n
        '''.format(data['name'], birth, data["number"], data["email"], data["information"])
        EmailThread(subject, contact_message, from_email, to_email).start()

        return JsonResponse([{
            "errors": [],
            "success": True,
            "affected":[{
                "statusCode": 200,
                "message": "Resident created",
                "fields": '[form.cleaned_data]'
            }]
        }], safe=False)
    else:
        return JsonResponse({
            "success": False,
            "errors": [{
                "statusCode": 500,
                "message": "Values is not valid",
                "fields": '[form.errors]'
            }]
        })


@login_required
def merch(request):
    if request.method == 'POST':
        f = MerchForm(request.POST, request.FILES)
        if f.is_valid():
            merch = Merch()
            merch.name = request.POST['name']
            merch.cost = request.POST['price']
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


@csrf_exempt
def get_merches(request):
    merches_object = json.loads(
        serializers.serialize('json', Merch.objects.all()))
    for i in merches_object:
        del i['model']

    return JsonResponse(merches_object, safe=False)


@csrf_exempt
def get_news(request):
    news_object = json.loads(serializers.serialize('json', News.objects.all()))
    for i in news_object:
        del i['model']
    return JsonResponse(news_object, safe=False)


@csrf_exempt
def api_orders(request):
    if request.method == 'POST':  # Create new order
        data = json.loads(request.body.decode('utf-8'))
        order = Order()
        order.full_name = data['fullName']
        order.phone = data['phone']
        order.city = data['city']
        order.npMail = data['npMail']
        order.merch = Merch.objects.get(id=data['merchId'])
        order.merch_size = data['merchSize']
        order.is_get_from_atom = data['isGetFromAtom']
        order.save()

        return JsonResponse({'ok': 'true'})
    else:  # Get all orders
        orders_list = json.loads(
            serializers.serialize('json', Order.objects.all()))
        for i in orders_list:
            del i['model']
        return JsonResponse(orders_list, safe=False)


@login_required
def orders(request):
    context = {
        'orders': Order.objects.all()
    }
    return render(request, 'orders/index.html', context)


@login_required
def people(request):
    context = {
        'mentors': Mentor.objects.all().reverse(),
        'mentors_len': Mentor.objects.count(),
        'residents': Resident.objects.all().reverse(),
        'residents_len': Resident.objects.count()
    }
    return render(request, 'people/index.html', context)


@login_required
def delete_article(request, pk):
    n = News.objects.get(id=pk)
    os.remove('{}/{}'.format(settings.MEDIA_ROOT, n.news_picture_url))
    n.delete()
    return HttpResponseRedirect('/news')


@login_required
def delete_merch(request, pk):
    m = Merch.objects.get(id=pk)
    try:
        os.remove('{}/{}'.format(settings.MEDIA_ROOT, m.avatar_url))
    except:
        pass
    m.delete()
    return HttpResponseRedirect('/merch')


@login_required
def edit_merch(request, pk):
    if request.method == 'POST':
        f = EditMerch(request.POST)
        if f.is_valid():
            p = Merch.objects.filter(id=pk)
            if request.POST['name']:
                p.update(name=request.POST['name'])
            if request.POST['price']:
                p.update(price=request.POST['price'])
            p.update(updated_time=datetime.datetime.now())
            return HttpResponseRedirect('/merch')
    else:
        context = {
            'form': EditMerch()
        }
        return render(request, 'edit_merch/index.html', context)


@login_required
def edit_article(request, pk):
    if request.method == 'POST':
        f = EditNews(request.POST)
        if f.is_valid():
            p = News.objects.filter(id=pk)
            if request.POST['header']:
                p.update(header=request.POST['header'])
            if request.POST['content']:
                p.update(content=request.POST['content'])
            p.update(updated_time=datetime.datetime.now())
            return HttpResponseRedirect('/news')
    else:
        context = {
            'form': EditNews()
        }
        return render(request, 'edit_news/index.html', context)


@login_required
def index(request):
    return HttpResponseRedirect('/merch')


@csrf_exempt
def login(request):
    if request.method == 'POST':
        try:
            user = authenticate(
                username=request.POST['username'], password=request.POST['password'])
            django_login(request, user)
            request.session.set_expiry(60*60*3)
        except AttributeError:
            messages.warning(request, 'Incorrect credentials')
            return HttpResponseRedirect('#')
        try:
            User.objects.get(username=request.POST['username'])
        except ObjectDoesNotExist:
            messages.warning(request, "User not found")
            return HttpResponseRedirect("#")
        return HttpResponseRedirect('/merch')
    else:
        context = {
            'form': LoginForm()
        }
        return render(request, "login/index.html", context)


@login_required
def logout(request):
    django_logout(request)
    return HttpResponseRedirect('/merch')
