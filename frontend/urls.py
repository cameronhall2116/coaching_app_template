from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('clients', index),
    path('messages', index),
    path('programs', index),
    path('nutrition', index)
]