from rest_framework import viewsets
from django import forms
from django.shortcuts import render
from rest_framework.response import Response
from .serializers import ExercisesSerializer
from routine_builder.models import Exercises
from django_filters import rest_framework as filters


class ExerciseFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr="istartswith")
    # body_part = filters.CharFilter(lookup_expr = 'istartswith')
    equipment = filters.CharFilter(lookup_expr="istartswith")
    muscle_group = filters.CharFilter(lookup_expr="istartswith")

    """
    muscle_group = filters.ModelChoiceFilter(
        queryset=Exercises.objects.all(),
        empty_label="All Categories",
        label="Categories",
        widget=forms.Select(attrs={'class': 'form-control'}),
        )

"""


class ExercisesViewSet(viewsets.ModelViewSet):
    queryset = Exercises.objects.all()
    serializer_class = ExercisesSerializer
    filterset_class = ExerciseFilter
