from django.urls import path, include
from . import views
from users.views import RegisterAPI,LoginAPI,UserAPI
from rest_framework.routers import DefaultRouter
from knox import views as knox_views

#Add extra url paths to DRF router API Root View

#Viewset Router Regisration
router = DefaultRouter()
router.register (r'exercises', views.ExercisesViewSet)
router.register (r'workouts', views.WorkoutViewSet)
router.register (r'routines', views.RoutineViewset)
 
urlpatterns = [

#Non-routed url Paths
    path('register/', RegisterAPI.as_view(), name = 'register'),
    path('login/', LoginAPI.as_view(), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
    path('user/', UserAPI.as_view(), name='user'),

    
    path('', include(router.urls)),

]

