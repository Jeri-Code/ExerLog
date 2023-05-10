from django.contrib import admin
from .models import Exercises, Workout,Routine
from rest_framework import serializers

# Register your models here.
class ExerciseAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'body_part')

admin.site.register(Exercises, ExerciseAdmin)

class WorkoutAdmin(admin.ModelAdmin):
    list_display = ('id', 'reps')

admin.site.register(Workout, WorkoutAdmin)

class RoutineAdmin(admin.ModelAdmin):
    list_display = ('routine_name','id')

admin.site.register(Routine, RoutineAdmin)