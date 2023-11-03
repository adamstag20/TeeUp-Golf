from django.contrib import admin

from .models import Course

class CourseAdmin(admin.ModelAdmin):
    list_display = ('name','holes','strokes','diff','description','driving_range','food','address','phone')

# Register your models here.

admin.site.register(Course, CourseAdmin)
