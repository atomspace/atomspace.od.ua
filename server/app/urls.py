from django.conf.urls import url
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from . import views


urlpatterns = [
	path('api/v1/mentors', views.mentors, name='mentors'),
	path('api/v1/residents', views.residents, name='residents'),
	path('api/v1/partners', views.partners, name='partners'),
	path('api/v1/merches', views.get_merches, name='get_merches'),
	path('api/v1/news', views.get_news, name='get_news'),
	path('api/v1/orders', views.api_orders, name='api_orders'),

	path('merch', views.merch, name='merch'),
	path('news', views.news, name='news'),
	path('orders', views.orders, name='orders'),
	path('people', views.people, name='people'),
	path('', views.index, name='index'),
	path('logout', views.logout, name='logout'),
	path('remove-person', views.remove_person, name='remove-person'),
	url(r'^login', views.login, name='login'),
	url(r'^news/(?P<pk>\d+)/delete$', views.delete_article, name='delete_article'),
	url(r'^mentor/(?P<pk>\d+)/delete', views.delete_mentor, name='delete_mentor'),
	url(r'^resident/(?P<pk>\d+)/delete', views.delete_resident, name='delete_mentor'),
	url(r'^partner/(?P<pk>\d+)/delete', views.delete_partner, name='delete_partner'),
	url(r'^order/(?P<pk>\d+)/delete', views.delete_order, name='delete_order'),
	url(r'^news/(?P<pk>\d+)/edit$', views.edit_article, name='edit_article'),
	url(r'^merch/(?P<pk>\d+)/edit$', views.edit_merch, name='edit_merch'),
]

if settings.DEBUG:
	urlpatterns += static(settings.MEDIA_URL,
						  document_root=settings.MEDIA_ROOT)
	urlpatterns += static(settings.STATIC_URL,
						  document_root=settings.STATIC_ROOT)
