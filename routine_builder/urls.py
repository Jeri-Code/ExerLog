from django.urls import path, include
from . import views
from users.views import RegisterAPI,LoginAPI
from knox import views as knox_views
from rest_framework.routers import DefaultRouter

# Add extra url paths to DRF router API Root View
class RouterWithExtraItemsInRoot(DefaultRouter):
    extra_urls = {'register': 'register',
                  'login':'login',
                  'logout':'logout',
                  'logoutall':'logoutall',
                 'react':'react'
                  }
    
    def get_api_root_view(self, api_urls=None):
        api_root_dict = {}
        list_name = self.routes[0].name
        for prefix, viewset, basename in self.registry:
            api_root_dict[prefix] = list_name.format(basename=basename)

        api_root_dict.update(self.extra_urls)  
        return self.APIRootView.as_view(api_root_dict=api_root_dict)

# Viewset Router Registration
router = RouterWithExtraItemsInRoot()
router.register (r'exercises', views.ExercisesViewSet)
router.register (r'workouts', views.WorkoutViewSet)
router.register (r'routines', views.RoutineViewset)
router.extra_urls['url/path'] = 'view_name'
 
urlpatterns = [

# Non-Routed URL Paths
    path('register/', RegisterAPI.as_view(), name = 'register'),
    path('login/', LoginAPI.as_view(), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
    
    path('', include(router.urls)),

]

