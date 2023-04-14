from django.shortcuts import render
from rest_framework import viewsets

from .serializers import ExercisesSerializer
from routine_builder.models import Exercises


class ExercisesViewSet(viewsets.ModelViewSet):
    queryset = Exercises.objects.all().order_by('name')
    serializer_class = ExercisesSerializer
# Create your views here.
