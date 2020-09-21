import json
import os
import datetime
from csv import writer

from django.http import JsonResponse
from django.core import serializers
from django.core.exceptions import ObjectDoesNotExist
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login as django_login, logout as django_logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.shortcuts import HttpResponseRedirect, render
from django.http import HttpResponse, Http404
from django.contrib import messages
from django.shortcuts import get_object_or_404

from .forms import MerchForm, NewsForm, EditMerch, EditNews, LoginForm
from .models import Merch, News, Mentor, Resident, Order, Partner
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
        post.phone = data['phone']
        post.email = data['email']
        post.information = data['information']
        post.save()

        # Sending callback email
        subject = 'Request to become a mentor!'
        from_email = settings.EMAIL_HOST_USER
        to_email = [data['email'], settings.EMAIL_TO]

        fileEmail = './app/templates/email/request_mentor.html'

        f = open(fileEmail, 'r')
        textEmail = f.read().format(subject,
                                    post.name,
                                    post.phone,
                                    post.email,
                                    post.information)

        EmailThread(subject, textEmail,
                    from_email, to_email).start()
        # ExcelExport(data).start()
        return JsonResponse({
            "errors": [],
            "success": True,
            "affected": [{
                "statusCode": 200,
                "message": "Mentor created",
                "fields": '[form.cleaned_data]'
            }]
        })
    return JsonResponse({
        "success": False,
        "errors": [{
            "statusCode": 500,
            "message": "Values is not valid",
            "fields": '[form.errors]'
        }]
    })


@csrf_exempt
def partners(request):
    if request.method == 'GET':
        partner_list = json.loads(
            serializers.serialize('json', Partner.objects.all()))
        for i in partner_list:
            del i['model']
        return JsonResponse(partner_list, safe=False)

    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        post = Partner()
        post.name = data['name']
        post.phone = data['phone']
        post.email = data['email']
        post.interest = data['interest']
        post.information = data['information']
        post.save()

        # Sending callback email
        subject = 'Request to become a partner!'
        from_email = settings.EMAIL_HOST_USER
        to_email = [data['email'], settings.EMAIL_TO]

        fileEmail = './app/templates/email/request_partner.html'

        f = open(fileEmail, 'r')
        textEmail = f.read().format(subject,
                                    post.name,
                                    post.phone,
                                    post.email,
                                    post.interest,
                                    post.information)

        EmailThread(subject, textEmail,
                    from_email, to_email).start()
        # ExcelExport(data).start()
        return JsonResponse({
            "errors": [],
            "success": True,
            "affected": [{
                "statusCode": 200,
                "message": "Partner created",
                "fields": '[form.cleaned_data]'
            }]
        })
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

        post.birthday = data['birth']
        post.email = data['email']
        post.phone = data['phone']
        post.information = data['information']
        post.save()

        # Sending callback email
        subject = 'Request to become a resident!'
        from_email = settings.EMAIL_HOST_USER
        to_email = [data['email']]

        fileEmail = './app/templates/email/request_resident.html'

        f = open(fileEmail, 'r')
        textEmail = f.read().format(subject,
                                    post.name,
                                    post.phone,
                                    post.email,
                                    post.information,
                                    post.birthday)

        EmailThread(subject, textEmail,
                    from_email, to_email).start()
        # ExcelExport(data).start()
        return JsonResponse([{
            "errors": [],
            "success": True,
            "affected":[{
                "statusCode": 200,
                "message": "Resident created",
                "fields": '[form.cleaned_data]'
            }]
        }], safe=False)

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
            merch_model = Merch()
            merch_model.name = request.POST['name']
            merch_model.cost = request.POST['price']
            merch_model.avatar_url = request.FILES['photo']
            merch_model.save()
            return HttpResponseRedirect('#')
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
    response = HttpResponse(json.dumps(merches_object))
    response['Set-Cookie'] = 'HttpOnly;Secure;SameSite=Strict'
    return response


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

        # Sending callback email
        subject = 'Request to buy new merch!'
        from_email = settings.EMAIL_HOST_USER
        to_email = [settings.EMAIL_TO]

        fileEmail = './app/templates/email/order.html'

        f = open(fileEmail, 'r')
        textEmail = f.read().format(subject,
                                    order.full_name,
                                    order.phone,
                                    order.city,
                                    order.npMail,
                                    order.merch.name, order.merch_size, order.merch.cost,
                                    "Yes." if order.is_get_from_atom else "No.")

        EmailThread(subject, textEmail,
                    from_email, to_email).start()

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
        'orders': Order.objects.all()[::-1]
    }
    return render(request, 'orders/index.html', context)


@login_required
def people(request):
    context = {
        'mentors': Mentor.objects.all()[::-1],
        'mentors_len': Mentor.objects.count(),
        'residents': Resident.objects.all()[::-1],
        'residents_len': Resident.objects.count(),
        'partners': Partner.objects.all()[::-1],
        'partners_len': Partner.objects.count()
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
def delete_mentor(request, pk):
    try:
        p = Mentor.objects.get(id=pk)
        p.delete()
        return HttpResponseRedirect('/people')
    except:
        return HttpResponseRedirect('.people')


@login_required
def delete_resident(request, pk):
    try:
        p = Resident.objects.get(id=pk)
        p.delete()
        return HttpResponseRedirect('/people')
    except:
        return HttpResponseRedirect('/people')


@login_required
def delete_partner(request, pk):
    try:
        p = Partner.objects.get(id=pk)
        p.delete()
        return HttpResponseRedirect('/people')
    except:
        return HttpResponseRedirect('/people')


@login_required
def delete_order(request, pk):
    try:
        o = Order.objects.get(id=pk)
        o.delete()
        return HttpResponseRedirect('/orders')
    except:
        return HttpResponseRedirect('/orders')


@login_required
def remove_person(request):
    try:
        data = json.loads(request.body.decode('utf-8'))
        person_id = data['id']
        category = data['category']
        if category == 'residents':
            Resident.objects.get(id=person_id).delete()
            return JsonResponse({'ok': 'true'}, safe=False)
        if category == 'mentors':
            Mentor.objects.get(id=person_id).delete()
            return JsonResponse({'ok': 'true'}, safe=False)
        if category == 'partners':
            Partner.objects.get(id=person_id).delete()
            return JsonResponse({'ok': 'true'}, safe=False)
    except:
        return JsonResponse({'ok': 'false'}, safe=False)


@login_required
def download_residents(request):
    obj = json.loads(serializers.serialize('json', Resident.objects.all()))
    data = [i['fields'] for i in obj]
    for i in data:
        del i['updated_time']
        created = datetime.datetime.strptime(
            i['created_time'][:-8], '%Y-%m-%dT%H:%M')
        i['created_time'] = str(created)
        i['phone'] = str(i['phone'])
    res = [list(data[0].keys())]
    for i in data:
        res.append(list(i.values()))
    with open('residents.csv', 'w') as f:
        wr = writer(f, delimiter=',')
        wr.writerows(res)
        f.close()
    with open('residents.csv', 'r') as f:
        response = HttpResponse(f.read(), content_type="text/csv")
        path = os.path.abspath('residents.csv')
        response['Content-Disposition'] = 'inline; filename=' + \
            os.path.basename(path)
        rm_temp(path)
        return response
    return Http404


@login_required
def download_mentors(request):
    obj = json.loads(serializers.serialize('json', Mentor.objects.all()))
    data = [i['fields'] for i in obj]
    for i in data:
        del i['updated_time']
        created = datetime.datetime.strptime(
            i['created_time'][:-8], '%Y-%m-%dT%H:%M')
        i['created_time'] = str(created)
        i['phone'] = str(i['phone'])
    res = [list(data[0].keys())]
    for i in data:
        res.append(list(i.values()))
    with open('mentors.csv', 'w') as f:
        wr = writer(f, delimiter=',')
        wr.writerows(res)
        f.close()
    with open('mentors.csv', 'r') as f:
        response = HttpResponse(f.read(), content_type="text/csv")
        path = os.path.abspath('mentors.csv')
        response['Content-Disposition'] = 'inline; filename=' + \
            os.path.basename(path)
        rm_temp(path)
        return response
    return Http404


@login_required
def download_orders(request):
    obj = json.loads(serializers.serialize('json', Order.objects.all()))
    data = [i['fields'] for i in obj]
    for i in data:
        del i['updated_time']
        created = datetime.datetime.strptime(
            i['created_time'][:-8], '%Y-%m-%dT%H:%M')
        i['created_time'] = str(created)
        i['phone'] = str(i['phone'])
    res = [list(data[0].keys())]
    for i in data:
        res.append(list(i.values()))
    with open('orders.csv', 'w') as f:
        wr = writer(f, delimiter=',')
        wr.writerows(res)
        f.close()
    with open('orders.csv', 'r') as f:
        response = HttpResponse(f.read(), content_type="text/csv")
        path = os.path.abspath('orders.csv')
        response['Content-Disposition'] = 'inline; filename=' + \
            os.path.basename(path)
        rm_temp(path)
        return response
    return Http404


@login_required
def download_partners(request):
    obj = json.loads(serializers.serialize('json', Partner.objects.all()))
    data = [i['fields'] for i in obj]
    for i in data:
        del i['updated_time']
        created = datetime.datetime.strptime(
            i['created_time'][:-8], '%Y-%m-%dT%H:%M')
        i['created_time'] = str(created)
        i['phone'] = str(i['phone'])
    res = [list(data[0].keys())]
    for i in data:
        res.append(list(i.values()))
    with open('partners.csv', 'w') as f:
        wr = writer(f, delimiter=',')
        wr.writerows(res)
        f.close()
    with open('partners.csv', 'r') as f:
        response = HttpResponse(f.read(), content_type="text/csv")
        path = os.path.abspath('partners.csv')
        response['Content-Disposition'] = 'inline; filename=' + \
            os.path.basename(path)
        rm_temp(path)
        return response
    return Http404


def rm_temp(path):
    if os.path.exists(path):
        os.remove(path)


@login_required
def logout(request):
    django_logout(request)
    return HttpResponseRedirect('/merch')
