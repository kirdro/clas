# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from django.utils import timezone
from abc import ABCMeta
from datetime import datetime
import os
import uuid

def get_image_path(instance, filename):
    dt0 = datetime(1970, 1, 1)
    t = int((datetime.now() - dt0).total_seconds())
    return os.path.join(instance.upload_to, '%s_%s' % (t, filename))

class MediaItem(models.Model):
    upload_to = 'now_owerrided'
    is_favorite = models.BooleanField(default=False)
    subtitle = models.CharField(blank=True, null=True, default=None, max_length=500, verbose_name='Подзаголовок')
    description = models.TextField(blank=True, null=True, default=None, verbose_name='Текст')
    video_url = models.CharField(blank=True, null=True, default=None, max_length=2000, verbose_name='Ссылка на youtube видео')
    image = models.ImageField(upload_to=get_image_path, verbose_name='Изображение', blank=True, null=True, default=None)
    class Meta:
        abstract = True
        verbose_name = 'Медиа вставка'
        verbose_name_plural = 'Медиа вставки'
    def image_tag(self):
        return u'<a href="%s"><img src="%s" style="max-height: 150px; max-width: 300px" /></a>' % (
            self.image.url, self.image.url
        )
    image_tag.short_description = 'Предпросмотр'
    image_tag.allow_tags = True


class AboutCompany(models.Model):
    title = models.CharField(blank=True, default='', max_length=200, verbose_name='Заголовок')
    subtitle = models.CharField(blank=True, default='', max_length=500, verbose_name='Подзаголовок')
    phone = models.CharField(max_length=200, blank=True, default='', verbose_name='Телефон')
    address = models.TextField(blank=True, default='', verbose_name='Адрес')
    description = models.TextField(blank=True, default='', verbose_name='О компании')
    email = models.CharField(max_length=30, blank=True, default='', verbose_name='Email')
    home_title = models.CharField(blank=True, default='', max_length=200, verbose_name='Заголовок на главной странице')
    home_description = models.TextField(blank=True, default='', verbose_name='Описание на главной странице')
    url_vkontakte = models.CharField(max_length=2000, blank=True, default=None, null=True, verbose_name='Ссылка Vkontakte')
    url_facebook = models.CharField(max_length=2000, blank=True, default=None, null=True, verbose_name='Ссылка Facebook')
    url_instagram = models.CharField(max_length=2000, blank=True, default=None, null=True, verbose_name='Ссылка Instagram')
    url_telegram = models.CharField(max_length=2000, blank=True, default=None, null=True, verbose_name='Ссылка Telegram')
    url_youtube = models.CharField(max_length=2000, blank=True, default=None, null=True, verbose_name='Ссылка Youtube')
    class Meta:
        verbose_name = 'Информация о компании'
        verbose_name_plural = 'Информация о компании'

class AboutCompanyMediaItem(MediaItem):
    upload_to = 'about_company/'
    about_company = models.ForeignKey(AboutCompany, related_name='media_items', verbose_name='О компании')

class AboutCompanyFileItem(models.Model):
    name = models.CharField(max_length=200, verbose_name='Имя')
    about_company = models.ForeignKey(AboutCompany, related_name='file_items', verbose_name='О компании')
    file = models.FileField(upload_to='project_files/', verbose_name='Файлы')
    class Meta:
        verbose_name = 'Файл'
        verbose_name_plural = 'Общие файлы'

class News(models.Model):
    title = models.CharField(max_length=200, verbose_name='Название')
    autor = models.CharField(max_length=200, blank=True, default='', verbose_name='Автор')
    description = models.TextField(default='', blank=True, verbose_name='Описание')
    dt = models.DateTimeField(default=timezone.now, verbose_name='Дата новости')
    def __unicode__(self):
        return self.title
    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'

class NewsMediaItem(MediaItem):
    upload_to = 'news/'
    news = models.ForeignKey(News, related_name='media_items', verbose_name='Новость')


WORK_ITEM_TYPES = (
    ('simple', 'Обычный'), ('future', 'Предстоящий'), ('favorite', 'Избранный')
)

class WorkItem(models.Model):
    title = models.CharField(max_length=200, verbose_name='Название')
    description = models.TextField(default='', blank=True, verbose_name='Описание')
    sort_index = models.IntegerField(default=0, verbose_name='Сортировочный индекс')
    project_type = models.CharField(max_length=10, choices=WORK_ITEM_TYPES, verbose_name='Тип проекта')
    def __unicode__(self):
        return self.title
    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проекты'

class WorkMediaItem(MediaItem):
    upload_to = 'work_items/'
    work_item = models.ForeignKey(WorkItem, related_name='media_items', verbose_name='Новость')

class WorkFileItem(models.Model):
    name = models.CharField(max_length=200, verbose_name='Имя')
    work_item = models.ForeignKey(WorkItem, related_name='file_items', verbose_name='Файл')
    file = models.FileField(upload_to='files/', verbose_name='Файлы проекта')
    class Meta:
        verbose_name = 'Файл'
        verbose_name_plural = 'Файлы'


class Event(models.Model):
    title = models.CharField(max_length=200, verbose_name='Название')
    autor = models.CharField(max_length=200, blank=True, default='', verbose_name='Автор')
    description = models.TextField(default='', blank=True, verbose_name='Описание')
    dt_start = models.DateTimeField(default=timezone.now, verbose_name='Дата начала события')
    dt_end = models.DateTimeField(default=None, null=True, blank=True, verbose_name='Дата конца события')
    def __unicode__(self):
        return self.title
    class Meta:
        verbose_name = 'Событие'
        verbose_name_plural = 'События'

class EventMediaItem(MediaItem):
    upload_to = 'events/'
    event = models.ForeignKey(Event, related_name='media_items', verbose_name='Событие')


class GaleryItem(models.Model):
    title = models.CharField(max_length=200, verbose_name='Название')
    autor = models.CharField(max_length=200, blank=True, default='', verbose_name='Автор')
    dt = models.DateTimeField(default=timezone.now, verbose_name='Дата новости')
    description = models.TextField(default='', blank=True, verbose_name='Описание')
    class Meta:
        verbose_name = 'Элемент галереи'
        verbose_name_plural = 'Элементы галереи'

class GaleryMediaItem(MediaItem):
    upload_to = 'galery/'
    galery_item = models.ForeignKey(GaleryItem, related_name='media_items', verbose_name='Галерея')


class Partner(models.Model):
    name = models.CharField(max_length=200, verbose_name='Имя')
    url = models.CharField(max_length=2000, verbose_name='Ссылка')
    class Meta:
        verbose_name = 'Партнер'
        verbose_name_plural = 'Партнеры'

class PartnerMediaItem(MediaItem):
    upload_to = 'partners/'
    partner = models.ForeignKey(Partner, related_name='media_items', verbose_name='Партнер')