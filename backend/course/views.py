from django.shortcuts import render
from rest_framework import viewsets
from django.http import JsonResponse
from .serializers import CourseSerializer, TeeTimeSerializer
from .models import Course, TeeTime

# Create your views here.

class CourseView(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()

    
class TeeTimeView(viewsets.ModelViewSet):
    serializer_class = TeeTimeSerializer
    queryset = TeeTime.objects.all()

def getTeeTimeByCourse(request, course):
    teeTimes = TeeTime.objects.filter(course = course).values()
    teeTimesList = list(teeTimes)
    return JsonResponse(teeTimesList, safe=False)

    