from django.shortcuts import render
from django.http import JsonResponse
from .forms import TestFormForm, StudentTestCase

def index_page(request):
    return  JsonResponse({'data': 'test'})


def test_create(request):
    if request.method == 'POST':
        form = TestFormForm(request.POST)
        if form.is_valid():
            #test_x = TestForm.objects.create()
            new_test = form.save()
    return JsonResponse({'data': new_test})

def send_test_to_student(request, user_id):
    return JsonResponse({'data': 'test'})

def get_test_results(request):
    test_results = StudentTestCase.objects.all().values('student_name', 'test_score')
    return JsonResponse({'data': test_results})