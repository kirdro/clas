from django.conf.urls import include, url
import views


urlpatterns = [
    url(r'^list/(\w+)/{0,1}$', views.content_provider),
]
