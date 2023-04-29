from django.db import models

class Exercises(models.Model):
    id = models.IntegerField(blank=True, null=False,primary_key= True)
    name = models.CharField(blank=True, null=True)
    muscle_group = models.CharField(blank=True, null=True)
    body_part = models.CharField(blank=True, null=True)
    equipment = models.CharField(blank=True, null=True)
    gif_url = models.CharField(blank=True, null=True)
    
    class Meta:
        managed = False
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

  
    
class Workout(models.Model):
    exerciseid = models.OneToOneField(Exercises,on_delete=models.CASCADE, primary_key= True)
    sets = models.CharField(blank=True, null=True)
    reps = models.CharField(blank=True, null=True)
    duration = models.IntegerField(blank = True, null = True)
    wid = models.ForeignKey(Routine, on_delete = models.CASCADE)



 

