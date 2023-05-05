from rest_framework import serializers

from routine_builder.models import Exercises, Routine

class ExercisesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercises
        fields = ('name', 'muscle_group','equipment', 'gif_url'
                  
                  )
        read_only_fields = fields

class RoutineSerializer(serializers.ModelSerializer):

    class Meta:
        model = Routine
        fields = ['name', 'day', 'user_id']
