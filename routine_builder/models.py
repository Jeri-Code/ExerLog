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
               return '{} {}'.format(self.name, self.body_part,self.equipment,self.gif_url)

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

    STATUSES = (
        ('Started', 'Started'),
        ('Finished', 'Finished'),
    )

    routine_name = models.CharField(blank=False, null = False)
    day = models.CharField( choices = DAY_CHOICES)
    status = models.CharField(max_length=8, choices=STATUSES, default=STATUSES[0][0])
    user = models.ForeignKey(User, related_name="routines", on_delete=models.CASCADE, blank=False, null=False)


    class Meta:
        managed = True
        db_table = 'routines'

    def __str__(self):

        return '{} {}'.format(self.routine_name, self.day, self.status,self.user)
    


class Workout(models.Model):
    exercise = models.ForeignKey(Exercises, 
                                         on_delete=models.CASCADE,related_name= 'exercise') 
    sets = models.IntegerField(blank=True, null=True)
    reps = models.IntegerField(blank=True, null=True)
    duration = models.IntegerField(blank = True, null = True)
    routine = models.ForeignKey(Routine, on_delete=models.CASCADE,related_name = "routine_workouts")
    
    class Meta:
        db_table = 'workouts'
        managed = True
        
    def __str__(self):
        return '{} {}'.format(self.exercise.name,self.sets,self.reps,self.duration,self.routine)
    

