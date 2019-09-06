from django.test import TestCase
from app.models import Resident, Mentor, Order, News, Merch

class TestModels(TestCase):
	def setUp(self):
		self.merch = Merch.objects.create(
			name='Item 1',
			cost=500,
			avatar_url='merch_photos/photo1.png'
		)
		self.resident = Resident.objects.create(
			name = 'Resident',
			birthday = '01-01-1970',
			email = 'resident@gmail.com',
			phone = '1234567890',
			information = 'Test info for resident'
		)
		self.mentor = Mentor.objects.create(
			name = 'Mentor',
			email = 'mentor@gmail.com',
			phone = '0987654321',
			information = 'Test info for mentor'
		)
		self.news = News.objects.create(
			header = 'Test news header',
			content = 'Some test content of article',
			news_picture_url = 'news_photos/news.png'
		)

	def test_create_order(self):
		order = Order.objects.create(
			full_name = 'Full Name',
			phone = '1234567890',
			city = 'Odessa',
			npMail = 63,
			merch = self.merch,
			merch_size = 'L',
			is_get_from_atom = False,
		)
		self.assertEquals(order.merch.name, self.merch.name)

	def test_other_models(self):
		self.assertEquals(self.merch.cost, 500)
		self.assertEquals(self.mentor.phone, '0987654321')
		self.assertEquals(self.news.header, 'Test news header')
		self.assertEquals(self.resident.name, 'Resident')