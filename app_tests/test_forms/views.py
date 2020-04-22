from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_GET, require_POST
from .forms import TestFormForm, StudentTestCase
import os
from django.http import HttpResponse
from app_tests.settings import BASE_DIR

def index_page(request):
    return  JsonResponse({'data': 'test'})

def test_create(request):
    if request.method == 'POST':
        form = TestFormForm(request.POST)
        if form.is_valid():
            new_test = form.save()
    return JsonResponse({'new_test': new_test})

def send_test_to_student(request, test_name, user_id):
    test_instance = TestFormForm.objects.filter(test_name = test_name).values('test_json')
    return JsonResponse({'test_instance': test_instance, 'test_instance_id': user_id})

@require_GET
def get_test_results(request):
    test_results = StudentTestCase.objects.all().values('student_name', 'test_score')
    return JsonResponse({'data': test_results})

# static
def pass_test(request, id):
    with open(os.path.join(BASE_DIR, 'static/pass_test', 'index.html')) as file:
        return HttpResponse(file.read())

# static
def check_results(request, id):
    with open(os.path.join(BASE_DIR, 'static/results', 'index.html')) as file:
        return HttpResponse(file.read())
