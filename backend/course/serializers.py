from rest_framework import serializers
from .models import Course, TeeTime

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('id', 'name', 'holes', 'strokes','diff','description','driving_range','food','address','phone')

class TeeTimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeeTime
        fields = ('course','owner','date','time','players')