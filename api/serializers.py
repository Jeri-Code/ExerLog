from rest_framework import serializers

from routine_builder.models import Exercises

class ExercisesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercises
        fields = ('name', 'muscle_group','body_part','equipment', 'gif_url'
                  
                  )
        read_only_fields = fields