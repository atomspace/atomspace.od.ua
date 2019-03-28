import json
import os

from django.http import JsonResponse
from django.core import serializers
from django.core.mail import send_mail
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import logout as django_logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import HttpResponseRedirect, render
from django.http import  HttpResponse

from .forms import MerchForm, NewsForm
from .models import Merch, News, Mentor, Resident, Order



@csrf_exempt
def mentors(request):
    if request.method == 'GET':
        mentors_list = serializers.serialize('json', Mentor.objects.all())
        return HttpResponse(mentors_list)

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
        to_email = [data['email']]
        contact_message = f'Name: {data["name"]}\nPhone number: {data["number"]}\nE-mail: {data["email"]}\nInfo: {data["information"]}\n'
        send_mail(subject, contact_message, from_email, ['mishkabudish@gmail.com'], fail_silently=False)

        return JsonResponse({
            "errors": [],
            "success": True,
            "affected":[{
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
        residents_list = serializers.serialize('json', Resident.objects.all())
        return HttpResponse(residents_list)

    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        post = Resident()
        post.name = data['name']
        post.email = data['email']
        post.number = data['number']
        # birth = '{}/{}/{}'.format(request.POST['date_day'],
        #                             request.POST['date_month'], request.POST['date_year'])

        # ------------- temporary --------------
        post.date = '05/02/2003'
        # --------------------------------------

        post.save()
        # subject = 'Request to resident'
        # from_email = settings.EMAIL_HOST_USER
        # to_email = [from_email]
        # contact_message = 'Name: {}\nE-mail: {}\nPhone number: {}\nBirth date: {}\n'.format(
        #     post.name, post.email, post.number, post.date)
        # send_mail(subject, contact_message, from_email,
        #           to_email, fail_silently=False)
        return JsonResponse([{
            "errors": [],
            "success": True,
            "affected":[{
                "statusCode": 200,
                "message": "Resident created",
                "fields": [form.cleaned_data]
            }]
        }], safe=False)
    else:
        return JsonResponse({
            "success": False,
            "errors": [{
                "statusCode": 500,
                "message": "Values is not valid",
                "fields": [form.errors]
            }]
        })

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

@csrf_exempt
def get_merches(request):
    merches_object = serializers.serialize('json', Merch.objects.all())
    return HttpResponse(merches_object)

@csrf_exempt
def get_news(request):
    news_object = serializers.serialize('json', News.objects.all())
    return HttpResponse(news_object)

@csrf_exempt
def orders(request):
    if request.method == 'POST': # Create new order
        data = json.loads(request.body.decode('utf-8'))
        order = Order()
        order.first_name = data['name']
        order.last_name = data['surname']
        order.phone = data['phone']
        order.email = data['email']
        order.merch_name = data['merch_name']
        order.merch_size = data['merch_size']
        order.merch_cost = data['merch_cost']

        subject = 'Request to order a merch item'
        from_email = settings.EMAIL_HOST_USER
        to_email = [data['email']]
        contact_message = f'Name: {data["name"]} {data["surname"]}\nPhone number: {data["phone"]}\nE-mail: {data["email"]}\nInfo about merch:\n\nItem: {data["merch_name"]}\nSize: {data["merch_size"]}\nCost: {data["merch_cost"]}'
        send_mail(subject, contact_message, from_email, ['mishkabudish@gmail.com'], fail_silently=False)

        return JsonResponse({'ok': 'true'})
    else: # Get all orders
        orders_list = serializers.serialize('json', Order.objects.all())
        return HttpResponse(orders_list)

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