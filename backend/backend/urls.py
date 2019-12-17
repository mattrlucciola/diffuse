from django.contrib import admin
from django.urls import path, include

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('admin/', admin.site.urls),
]

urlpatterns += [
    path('api/user/', include('user.urls')),
    path('api/project/', include('project.urls')),
    path('api/auth/', include('rest_auth.urls')),
]