from rest_framework import serializers

from routine_builder.models import Exercises

class ExercisesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercises
        fields = '__all__'