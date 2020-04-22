from .views import index_page, test_create
from django.urls import path

urlpatterns = [
  path('', index_page, name='index_page'),
  path('test_form', test_create, name='test_create'),
  path('test_form', test_create, name='test_create'),
]