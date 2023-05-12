from rest_framework import serializers
from .models import Exercises,Workout,Routine

class ExercisesSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Exercises
        fields = ('id','name', 'muscle_group','equipment', 'gif_url')

    
class WorkoutSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source = 'exercise.name',read_only = True)
    body_part = serializers.CharField(source = 'exercise.body_part', read_only = True)
    gif_url = serializers.CharField(source = 'exercise.gif_url',read_only = True)
    user = serializers.CharField(source = 'user.username', read_only  = True,)
    
    class Meta:
        model = Workout
        fields = ['exercise','user','name','body_part','sets','reps','duration','gif_url','routine']

    def create(self, validated_data):
        request_user = self.context['request'].user
        if validated_data:
            instance = Workout.objects.create(user=request_user, **validated_data)
        
        return instance    

    
class RoutineSerializer(serializers.ModelSerializer):
    routine_workouts = WorkoutSerializer(many = True, read_only = True)
    user = serializers.CharField(source = 'user.username', read_only  = True,)

    class Meta:     
        model = Routine
        fields = ['id','user','routine_name','day','routine_workouts']

    def create(self, validated_data):
        request_user = self.context['request'].user
        if validated_data:
            instance = Routine.objects.create(user=request_user,**validated_data)
        
        return instance



