from django.conf.urls import url
from . import views
from django.urls import path
from django.conf.urls.static import static
from . import views
from django.contrib.auth.views import LoginView
from django.contrib.auth import views as auth_views
from django.conf import settings
from django.views.static import serve


urlpatterns = [
    url(r'^api/v1/mentors', views.mentors, name='mentors'),
    url(r'^api/v1/residents', views.residents, name='residents'),
    url(r'^api/v1/merches', views.get_merches, name='get_merches'),
    url(r'^api/v1/news', views.get_news, name='get_news'),
    path('', views.index, name='index'),
    path('merch', views.merch, name='merch'),
    path('news', views.news, name='news'),
    path('login/', auth_views.LoginView.as_view(template_name='login/index.html')),
    path('logout', views.logout, name='logout'),
    url(r'^news/(?P<pk>\d+)/delete$', views.delete_article, name='delete_article'),
    url(r'^merch/(?P<pk>\d+)/delete$', views.delete_merch, name='delete_merch'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
