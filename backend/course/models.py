from django.db import models

# Create your models here.
class Course(models.Model):

    name = models.CharField(max_length=120, default='')
    holes = models.IntegerField(default=18)
    strokes = models.IntegerField(default=100)
    diff = models.CharField(max_length=120, default='')
    description = models.TextField()
    driving_range = models.BooleanField(default=False)
    food = models.BooleanField(default=False)
    address = models.CharField(max_length=120, default='')
    phone = models.CharField(max_length=120, default='')

    def _str_(self):
        return self.name
