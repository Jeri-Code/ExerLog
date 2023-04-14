from django.contrib import admin
from .models import Exercises
# Register your models here.
class ExerciseAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'body_part')

admin.site.register(Exercises, ExerciseAdmin)
