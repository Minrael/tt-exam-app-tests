from django.db import models

class TestForm(models.Model):
    test_name = models.CharField(max_length=32, null=False)
    test_json = models.TextField()


    class Meta:
        verbose_name = ''
        verbose_name_plural = ''
