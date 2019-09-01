from django.test import SimpleTestCase
from django.urls import reverse, resolve
from app.views import mentors, residents, get_merches, get_news, api_orders, merch, news, orders, people
from app.urls import urlpatterns


class TestUrls(SimpleTestCase):
    def test_orders_resolves(self):
        url = reverse('orders')
        self.assertEquals(resolve(url).func, orders)

    def test_people_resolves(self):
        url = reverse('people')
        self.assertEquals(resolve(url).func, people)

    def test_mentors_resolves(self):
        url = reverse('mentors')
        self.assertEquals(resolve(url).func, mentors)

    def test_residents_resolves(self):
        url = reverse('residents')
        self.assertEquals(resolve(url).func, residents)

    def test_get_merches_resolves(self):
        url = reverse('get_merches')
        self.assertEquals(resolve(url).func, get_merches)

    def test_get_news_resolves(self):
        url = reverse('get_news')
        self.assertEquals(resolve(url).func, get_news)

    def test_api_orders_resolves(self):
        url = reverse('api_orders')
        self.assertEquals(resolve(url).func, api_orders)

    def test_merch_resolves(self):
        url = reverse('merch')
        self.assertEquals(resolve(url).func, merch)

    def test_news_resolves(self):
        url = reverse('news')
        self.assertEquals(resolve(url).func, news)
