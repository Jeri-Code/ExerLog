# Generated by Django 4.2 on 2023-05-09 17:39

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('routine_builder', '0004_alter_workout_exercise'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='workout',
            name='user',
        ),
        migrations.CreateModel(
            name='Routine',
            fields=[
                ('id', models.IntegerField(blank=True, primary_key=True, serialize=False)),
                ('name', models.CharField()),
                ('day', models.CharField(choices=[('sunday', 'Sunday'), ('monday', 'Monday'), ('tuesday', 'Tuesdau'), ('wednesday', 'Wednesday'), ('thursday', 'Thursday'), ('friday', 'Friday'), ('saturday', 'Saturday')])),
                ('notes', models.CharField()),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='routines', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'routines',
                'managed': True,
            },
        ),
    ]