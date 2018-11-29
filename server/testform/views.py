from django.shortcuts import render, HttpResponseRedirect, HttpResponse
from django.http import JsonResponse
from django.core import serializers
from django.core.mail import send_mail
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt

from .models import Mentor, Resident
from .forms import MentorForm, ResidentForm


@csrf_exempt
def index(request):
    mentor_list = Mentor.objects.all()
    resident_list = Resident.objects.all()
    return render(request, 'testform/index.html', {'mentors': MentorForm(), 'all_mentors': mentor_list, 'residents': ResidentForm(), 'all_residents': resident_list})


@csrf_exempt
def mentors(request):
    if request.method == 'GET':
        mentors = Mentor.objects.all()
        mentors_serialized = serializers.serialize('json', mentors)
        return JsonResponse(mentors_serialized, safe=False)

    if request.method == 'POST':
        print(request.POST)
        form = MentorForm(request.POST)
        if form.is_valid():
            print(222)
            post = Mentor()
            post.name = request.POST['name']
            post.number = request.POST['number']
            post.email = request.POST['email']
            post.information = request.POST['information']
            post.save()

            # TODO fix sending to email mentor
            # subject = 'Request to mentor'
            # from_email = settings.EMAIL_HOST_USER
            # to_email = [from_email]
            # contact_message = 'Name: {}\nPhone number: {}\nE-mail: {}\nInfo: {}\n'.format(
            #     post.name, post.number, post.email, post.information)
            # send_mail(subject, contact_message, from_email,
            #           to_email, fail_silently=False)
            return JsonResponse([{
                "errors": [],
                "success": True,
                "affected":[{
                    "statusCode": 200,
                    "message": "Mentor created",
                    "fields":[form.cleaned_data]
                }]
            }], safe=False)
        else:
            return JsonResponse({
                "success": False,
                "errors": [{
                    "statusCode": 400,
                    "message": "Values is not valid",
                    "fields": [form.errors]
                }]
            })


@csrf_exempt
def residents(request):
    if request.method == 'GET':
        residents = Resident.objects.all()
        residents_serialized = serializers.serialize('json', residents)
        return JsonResponse(residents_serialized, safe=False)

    if request.method == 'POST':
        form = ResidentForm(request.POST)
        if form.is_valid():
            post = Resident()
            post.name = request.POST['name']
            post.email = request.POST['email']
            post.number = request.POST['number']
            birth = '{}/{}/{}'.format(request.POST['date_day'],
                                      request.POST['date_month'], request.POST['date_year'])
            post.date = birth
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
                    "fields":[form.cleaned_data]
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
