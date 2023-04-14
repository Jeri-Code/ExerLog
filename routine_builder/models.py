from django.db import models

# Create your models here.

class Exercises(models.Model):
    id = models.IntegerField(blank=True, null=False,primary_key= True)
    name = models.CharField(blank=True, null=True)
    body_part = models.CharField(blank=True, null=True)
    equipment = models.CharField(blank=True, null=True)
    gif_url = models.CharField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'exercises'

    def __str__(self):
        return self


