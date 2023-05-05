from rest_framework import viewsets
from django import forms
from django.shortcuts import render
from rest_framework.response import Response
from .serializers import ExercisesSerializer, RoutineSerializer
from routine_builder.models import Exercises, Routine
from django_filters import rest_framework as filters
from rest_framework.permissions import IsAuthenticated




class ExerciseFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr = 'istartswith')
    # body_part = filters.CharFilter(lookup_expr = 'istartswith')
    muscle_group = filters.CharFilter(lookup_expr = 'istartswith')
    equipment = filters.CharFilter(lookup_expr = 'istartswith')

    '''
    muscle_group = filters.ModelChoiceFilter(
        queryset=Exercises.objects.all(),
        empty_label="All Categories",
        label="Categories",
        widget=forms.Select(attrs={'class': 'form-control'}),
        )

'''
class ExercisesViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = Exercises.objects.all()
    serializer_class = ExercisesSerializer
    filterset_class = ExerciseFilter

class RoutineViewset(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    http_method_names = ['get', 'post', 'delete']
    serializer_class = RoutineSerializer
    queryset = Routine.objects.all()
