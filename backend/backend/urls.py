"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, register_converter
from rest_framework import routers
from course import views
from datetime import date, datetime
router = routers.DefaultRouter()
router.register(r'course', views.CourseView, 'course')
router.register(r'TeeTime', views.TeeTimeView, 'TeeTime')

class DateConverter:
      regex = r"\d{4}-\d{1,2}-\d{1,2}"
      format = "%Y-%m-%d"

      def to_python(self, value: str) -> date:
          return datetime.strptime(value, self.format).date()

      def to_url(self, value: date) -> str:
          return value.strftime(self.format)

register_converter(DateConverter, "date")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('teetimes/<int:course>/', views.getTeeTimeByCourse),
    path('teetimes/<int:course>/<date:date>/', views.getTeeTimeByCourseAndDay) 
]

