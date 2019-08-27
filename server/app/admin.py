from django.contrib import admin
from .models import Merch, News, Mentor, Resident, Order


@admin.register(Merch)
class MerchAdmin(admin.ModelAdmin):
    pass


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    pass


@admin.register(Mentor)
class MentorAdmin(admin.ModelAdmin):
    pass


@admin.register(Resident)
class ResidentAdmin(admin.ModelAdmin):
    pass


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    pass
