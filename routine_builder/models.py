from django.db import models
from django.contrib.auth.models import User


class Exercises(models.Model):
    id = models.IntegerField(blank=True, null=False,primary_key= True)
    name = models.CharField(blank=True, null=True)
    muscle_group = models.CharField(blank=True, null=True)
    body_part = models.CharField(blank=True, null=True)
    equipment = models.CharField(blank=True, null=True)
    gif_url = models.CharField(blank=True, null=True)    
    
    class Meta:
        managed = True
        db_table = 'exercises'

    def __str__(self):
        return self    

class Routine(models.Model):

    DAY_CHOICES = [
        ('sunday', "Sunday"),
        ('monday', "Monday"),
        ('tuesday', "Tuesdau"),
        ('wednesday', "Wednesday"),
        ('thursday', "Thursday"),
        ('friday', "Friday"),
        ('saturday', "Saturday"),
    ]

    id = models.IntegerField(blank=False, null=False,primary_key= True)
    name = models.CharField(blank=False, null = False)
    day = models.CharField(blank=False, choices = DAY_CHOICES,)
    notes = models.CharField(blank=True, null=True)
    user = models.ForeignKey(User, related_name="routines", on_delete=models.CASCADE, blank=True, null=True)


    class Meta:
        managed = True
        db_table = 'routines'

    def __str__(self):
        return self   

    
class Workout(models.Model):
    id = models.IntegerField(blank=False, null=False, primary_key= True)
    name = models.CharField(blank=False, null = False)
    sets = models.IntegerField(blank=True, null=True)
    reps = models.IntegerField(blank=True, null=True)
    duration = models.IntegerField(blank = True, null = True)
    user = models.ForeignKey(User, related_name="workouts", on_delete=models.CASCADE, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'workouts'

    def __str__(self):
        return self   

class ExerciseWorkout(models.Model):
    wid = models.ForeignKey(Workout, related_name="workout_exercises", on_delete=models.CASCADE)
    eid = models.ForeignKey(Exercises, on_delete=models.CASCADE)

 

