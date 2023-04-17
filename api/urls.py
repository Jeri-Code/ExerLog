# myapi/urls.py
from django.urls import include, path
from rest_framework import routers
from . import views

#The REST Framework router will make sure our requests end up at the right resource dynamically. 
# If we add or delete items from the database, the URLs will update to match
router = routers.DefaultRouter()
router.register(r'exercises', views.ExercisesViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
]