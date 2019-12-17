# django imports
from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework import viewsets, permissions

# import serializers
from .serializers import UserSerializer

# import model
User = get_user_model()

# import permissions
from .permissions import IsAdminUser, IsLoggedInUserOrAdmin

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    search_fields  = ('first_name', 'last_name', 'username')
    filter_fields  = ('id', 'first_name', 'last_name', 'username')
    lookup_field = 'username'

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create' or self.action == 'retrieve':
            permission_classes = [permissions.AllowAny]
        elif self.action == 'update' or self.action == 'partial_update' or self.action == 'destroy':
            permission_classes = [IsLoggedInUserOrAdmin]
        elif self.action == 'list':
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]

    def put(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)