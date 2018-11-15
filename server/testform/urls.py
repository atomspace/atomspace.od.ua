from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^mentor_form/', views.mentor_form, name='mentor_form'),
    url(r'^resident_form/', views.resident_form, name='resident_form')
]