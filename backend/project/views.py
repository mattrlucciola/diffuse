# django imports
from django.shortcuts import render
from rest_framework import viewsets, permissions, generics

# import serializers
from .serializers import ProjectDetailSerializer

# import model
from .models import Project

# import permissions
from user.permissions import IsLoggedInUserOrAdmin, IsAdminUser

# Create your views here.
class ProjectViewSet(viewsets.ModelViewSet):
    def get_permissions(self):
        permission_classes = []
        if self.action == 'create' or self.action == 'retrieve' or self.action == 'list':
            permission_classes = [permissions.AllowAny]
        elif self.action == 'update' or self.action == 'partial_update' or self.action == 'destroy':
            permission_classes = [IsLoggedInUserOrAdmin]
        return [permission() for permission in permission_classes]
    def put(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)
    serializer_class = ProjectDetailSerializer
    queryset = Project.objects.all()
    search_fields  = ('name', 'user', 'project_slug', 'resource_slug')
    filter_fields  = ('id', 'name', 'user', 'project_slug', 'resource_slug')
    lookup_field = 'resource_slug'