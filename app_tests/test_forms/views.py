from django.shortcuts import render
from django.http import JsonResponse
from .forms import TestFormForm

def index_page(request):
    return  JsonResponse({'data': 'test'})


def test_create(request):
    if request.method == 'POST':
        form = TestFormForm(request.POST)
        if form.is_valid():
            new_test = form.save()
    return JsonResponse({'data': new_test})