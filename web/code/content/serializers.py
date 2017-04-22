# -*- coding: utf-8 -*-
from rest_framework import serializers
import models
import json
import re


def extract_youtube_id(url):
    s = re.search(r'v=(.+)', url)
    return s.groups()[0] if s else ''

def extract_media(media_items):
    res = []
    for m in media_items:
        if m.subtitle:
            res.append({
                'item_type': 'subtitle',
                'value': m.subtitle,
                'is_favorite': m.is_favorite
            })
        if m.description:
            res.append({
                'item_type': 'description',
                'value': m.description,
                'is_favorite': m.is_favorite
            })
        if m.image:
            res.append({
                'item_type': 'image',
                'url': m.image.url,
                'is_favorite': m.is_favorite
            })
        if m.video_url:
            res.append({
                'item_type': 'video',
                'youtube_id': extract_youtube_id(m.video_url),
                'is_favorite': m.is_favorite
            })
    return res

def extract_files(file_items):
    res = []
    for f in file_items:
        res.append({
            'item_type': 'file',
            'value': f.file.url,
            'name': f.name
        })
    return res

class AboutCompanySerializer(serializers.ModelSerializer):
    media = serializers.SerializerMethodField('_media')
    files = serializers.SerializerMethodField('_files')
    class Meta:
        model = models.AboutCompany
        fields = (
            'title',
            'subtitle',
            'phone',
            'address',
            'description',
            'email',
            'home_title',
            'home_description',
            'url_vkontakte',
            'url_facebook',
            'url_instagram',
            'url_telegram',
            'url_youtube',
            'media',
            'files',
            'coords',
        )
    def _media(self, obj):
        return extract_media(obj.media_items.all())
    def _files(self, obj):
        return extract_files(obj.file_items.all())

class NewsSerializer(serializers.ModelSerializer):
    media = serializers.SerializerMethodField('_media')
    class Meta:
        model = models.News
        fields = (
            'title',
            'autor',
            'description',
            'dt',
            'media',
            'coords',
        )
    def _media(self, obj):
        return extract_media(obj.media_items.all())

class WorkItemSerializer(serializers.ModelSerializer):
    media = serializers.SerializerMethodField('_media')
    files = serializers.SerializerMethodField('_files')
    class Meta:
        model = models.WorkItem
        fields = (
            'title',
            'description',
            'sort_index',
            'project_type',
            'media',
            'files',
            'coords',
        )
    def _media(self, obj):
        return extract_media(obj.media_items.all())
    def _files(self, obj):
        return extract_files(obj.file_items.all())

class EventSerializer(serializers.ModelSerializer):
    media = serializers.SerializerMethodField('_media')
    class Meta:
        model = models.Event
        fields = (
            'title',
            'autor',
            'description',
            'dt_start',
            'dt_end',
            'media',
            'coords',
        )
    def _media(self, obj):
        return extract_media(obj.media_items.all())

class GaleryItemSerializer(serializers.ModelSerializer):
    media = serializers.SerializerMethodField('_media')
    class Meta:
        model = models.GaleryItem
        fields = (
            'title',
            'autor',
            'dt',
            'description',
            'media',
        )
    def _media(self, obj):
        return extract_media(obj.media_items.all())

class PartnerSerializer(serializers.ModelSerializer):
    media = serializers.SerializerMethodField('_media')
    class Meta:
        model = models.Partner
        fields = (
            'name',
            'url',
            'media',
        )
    def _media(self, obj):
        return extract_media(obj.media_items.all())