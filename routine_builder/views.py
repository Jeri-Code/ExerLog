from rest_framework import viewsets
from .serializers import ExercisesSerializer, WorkoutSerializer,RoutineSerializer
from .models import Exercises,Workout,Routine
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
    queryset = Exercises.objects.all()
    serializer_class = ExercisesSerializer
    filterset_class = ExerciseFilter


class WorkoutViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated,]
    serializer_class = WorkoutSerializer
    queryset = Workout.objects.all()
    def get_queryset(self, *args, **kwargs):
        return Workout.objects.all().filter(user=self.request.user.id)

class RoutineViewset(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated,]
    serializer_class = RoutineSerializer
    queryset = Routine.objects.all()
  
    def get_queryset(self, *args, **kwargs):
        return Routine.objects.all().filter(user=self.request.user.id)