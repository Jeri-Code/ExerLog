from rest_framework import serializers

from routine_builder.models import Exercises

class ExercisesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Exercises
        fields = ('name', 'body_part')