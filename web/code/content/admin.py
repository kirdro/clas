# -*- coding: utf-8 -*-
from django.contrib import admin
from django.contrib.auth.models import Group
import models

class AboutCompanyMediaItemInline(admin.StackedInline):
    readonly_fields = ('image_tag',)
    model = models.AboutCompanyMediaItem

class AboutCompanyFileItemInline(admin.StackedInline):
    model = models.AboutCompanyFileItem    

class AboutCompanyAdmin(admin.ModelAdmin):
    inlines = [
        AboutCompanyMediaItemInline,
        AboutCompanyFileItemInline
    ]
    list_display = ('title', 'address', 'phone', 'email')
    def has_add_permission(self, request):
        return False if self.model.objects.count() > 0 else \
            super(AboutCompanyAdmin, self).has_add_permission(request)


class NewsMediaItemInline(admin.StackedInline):
    readonly_fields = ('image_tag',)
    model = models.NewsMediaItem

class NewsAdmin(admin.ModelAdmin):
    inlines = [
        NewsMediaItemInline
    ]
    list_display = ('title', 'autor', 'dt')


class WorkMediaItemInline(admin.StackedInline):
    readonly_fields = ('image_tag',)
    model = models.WorkMediaItem

class WorkFileItemInline(admin.StackedInline):
    model = models.WorkFileItem

class WorkItemAdmin(admin.ModelAdmin):
    inlines = [
        WorkMediaItemInline,
        WorkFileItemInline
    ]
    list_display = ('title', 'sort_index', 'project_type')


class EventMediaItemInline(admin.StackedInline):
    readonly_fields = ('image_tag',)
    model = models.EventMediaItem

class EventAdmin(admin.ModelAdmin):
    inlines = [
        EventMediaItemInline
    ]
    list_display = ('title', 'autor', 'dt_start', 'dt_end')


class GaleryMediaItemInline(admin.StackedInline):
    readonly_fields = ('image_tag',)
    model = models.GaleryMediaItem

class GaleryItemAdmin(admin.ModelAdmin):
    inlines = [
        GaleryMediaItemInline
    ]
    list_display = ('title', 'autor', 'dt')


class PartnerMediaItemInline(admin.StackedInline):
    readonly_fields = ('image_tag',)
    model = models.PartnerMediaItem

class PartnerAdmin(admin.ModelAdmin):
    inlines = [
        PartnerMediaItemInline
    ]
    list_display = ('name', 'url')

admin.site.register(models.AboutCompany, AboutCompanyAdmin)
admin.site.register(models.News, NewsAdmin)
admin.site.register(models.WorkItem, WorkItemAdmin)
admin.site.register(models.Event, EventAdmin)
admin.site.register(models.GaleryItem, GaleryItemAdmin)
admin.site.register(models.Partner, PartnerAdmin)

admin.site.site_header = 'Административная панель "КЛАС"'
