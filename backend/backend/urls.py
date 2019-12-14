"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from core.views import index

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('admin/', admin.site.urls),
]

urlpatterns += [
    path('api/user/', include('user.urls')),
    path('api/project/', include('project.urls')),
    path('api/auth/', include('rest_auth.urls')),
    path("", index, name="index")
]

####################################################################################
############# (BELOW) from https://dev-yakuza.github.io/en/django/jwt/ #############
# from rest_framework_jwt.views import obtain_jwt_token, verify_jwt_token, refresh_jwt_token
# urlpatterns += [
#     path('api/token/', obtain_jwt_token),
#     path('api/token/verify/', verify_jwt_token),
#     path('api/token/refresh/', refresh_jwt_token),
# ]
############# (ABOVE) from https://dev-yakuza.github.io/en/django/jwt/ #############
####################################################################################