from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ApplicationViewSet


urlpatterns = [
    path('', ApplicationViewSet.as_view({'post': 'create'}), name='application'),
]