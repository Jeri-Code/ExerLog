from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ExercisesSerializer
from routine_builder.models import Exercises

@api_view(['GET'])
def getExercises(request):
    all_exercises =  Exercises.objects.all()
    serializer = ExercisesSerializer(all_exercises, many = True)
    return Response(serializer.data)
# Create your views here.
