# myapi/urls.py
from django.urls import path, include
from . import views
from users.views import RegisterAPI
from users.views import LoginAPI
from knox import views as knox_views
from rest_framework.routers import DefaultRouter
from django .views.generic import TemplateView


class RouterWithExtraItemsInRoot(DefaultRouter):

    extra_urls = {'register': 'register',
                  'login': 'login',
                  'logout': 'logout',
                  'logoutall': 'logoutall',

                  }

    def get_api_root_view(self, api_urls=None):
        api_root_dict = {}
        list_name = self.routes[0].name
        for prefix, viewset, basename in self.registry:
            api_root_dict[prefix] = list_name.format(basename=basename)

        api_root_dict.update(self.extra_urls)  # Add extra urls
        return self.APIRootView.as_view(api_root_dict=api_root_dict)


router = RouterWithExtraItemsInRoot()
router.register(r'exercises', views.ExercisesViewSet)
router.extra_urls['url/path'] = 'view_name'


urlpatterns = [
    path('login/', LoginAPI.as_view(), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
    path('register/', RegisterAPI.as_view(), name='register'),
    path('', include(router.urls)),

]
