from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from .serializers import ExercisesSerializer
from routine_builder.models import Exercises


class ExercisesViewSet(viewsets.ModelViewSet):
    queryset = Exercises.objects.all()
    serializer_class = ExercisesSerializer
    
    def retrieve(self, request, pk=None):
        exercise = get_object_or_404(self.queryset, pk=pk)
        serializer = ExercisesSerializer(exercise)
        return Response(serializer.data)
    

