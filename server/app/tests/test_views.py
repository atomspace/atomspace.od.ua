from django.test import TestCase, Client
from django.urls import reverse
from app.models import Resident, Mentor, Order, News, Merch
import json


class TestViews(TestCase):
	def setUp(self):
		self.client = Client()
		self.mentors_url = reverse('mentors')
		self.residents_url = reverse('residents')
		self.orders_url = reverse('orders')
		self.get_merches_url = reverse('get_merches')
		self.get_news_url = reverse('get_news')
		self.merch_url = reverse('merch')
		self.news_url = reverse('news')
		self.orders_url = reverse('orders')
		self.people_url = reverse('people')

	def test_mentors_GET(self):
		res = self.client.get(self.mentors_url)
		self.assertEquals(res.status_code, 200)
	
	def test_residents_GET(self):
		res = self.client.get(self.residents_url)
		self.assertEquals(res.status_code, 200)
	
	def test_orders_GET(self):
		res = self.client.get(self.orders_url)
		self.assertEquals(res.status_code, 200)
	
	def test_get_merches_GET(self):
		res = self.client.get(self.get_merches_url)
		self.assertEquals(res.status_code, 200)
	
	def test_get_news_GET(self):
		res = self.client.get(self.get_news_url)
		self.assertEquals(res.status_code, 200)
	
	def test_get_about_photos_GET(self):
		res = self.client.get(self.get_about_photos)
		self.assertEquals(res.status_code, 200)

	# Next views will return 302 status code because we are not logged in
	def test_merch_GET(self):
		res = self.client.get(self.merch_url)
		self.assertEquals(res.status_code, 302)

	def test_news_GET(self):
		res = self.client.get(self.news_url)
		self.assertEquals(res.status_code, 302)

	def test_orders_GET(self):
		res = self.client.get(self.orders_url)
		self.assertEquals(res.status_code, 302)

	def test_people_GET(self):
		res = self.client.get(self.people_url)
		self.assertEquals(res.status_code, 302)