from django.db import models

class TestForm(models.Model):
    test_name = models.CharField(max_length=32, null=False)
    test_json = models.TextField()

    class Meta:
        verbose_name = ''
        verbose_name_plural = ''

class StudentTestCase(models.Model):
    test_name = models.ForeignKey(TestForm, on_delete=models.CASCADE)
    student_name = models.CharField(max_length=64, null = False)
    test_score = models.IntegerField()

    class Meta:
        verbose_name = ''
        verbose_name_plural = ''
