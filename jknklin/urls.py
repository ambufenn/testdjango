from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),  # root app → index view
]
