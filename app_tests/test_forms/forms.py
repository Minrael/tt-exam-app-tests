from django import forms
from .models import TestForm, StudentTestCase

class TestFormForm(forms.ModelForm):
    class Meta:
        model = TestForm
        fields = ('test_name', 'test_json',)

class StudentTestCaseForm(forms.ModelForm):
    class Meta:
        model = TestForm