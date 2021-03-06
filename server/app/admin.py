from django.contrib import admin
from .models import Merch, News, Mentor, Resident, Order, Partner
from import_export.admin import ExportActionMixin

@admin.register(Merch)
class MerchAdmin(admin.ModelAdmin):
    pass

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    pass

@admin.register(Mentor)
class MentorAdmin(ExportActionMixin, admin.ModelAdmin):
    pass

@admin.register(Resident)
class ResidentAdmin(ExportActionMixin, admin.ModelAdmin):
    pass

@admin.register(Partner)
class PartnerAdmin(ExportActionMixin, admin.ModelAdmin):
    pass

@admin.register(Order)
class OrderAdmin(ExportActionMixin, admin.ModelAdmin):
    pass