from django.contrib import admin

from .models import Course, TeeTime

class CourseAdmin(admin.ModelAdmin):
    list_display = ('name','holes','strokes','diff','description','driving_range','food','address','phone')

class TeeTimeAdmin(admin.ModelAdmin):

    list_display= ('course','owner','date','time','players')

# Register your models here.

admin.site.register(Course, CourseAdmin)
admin.site.register(TeeTime, TeeTimeAdmin)
