from .views import index_page, test_create, re
from django.urls import path

urlpatterns = [
  path('', index_page, name='index_page'),
  path('test_form', test_create, name='test_create'),
  path('send_test_to_student/<str:test_name>/<int:user_id>', send_test_to_student, name='send_test_to_student'),
  path('get_test_results', get_test_results, name='get_test_results'),
  path('check_results/<int:i>', check_results, name='test_create'),
]