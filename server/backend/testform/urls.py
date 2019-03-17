from django.conf.urls import url, include
from . import views


urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^api/v1/mentors', views.mentors, name='mentors'),
    url(r'^api/v1/residents', views.residents, name='residents'),
]