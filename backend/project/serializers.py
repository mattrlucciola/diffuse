# import model
from .models import Project

# import serializers
from user.serializers import UserSerializer, CollaboratorsListingField, UserDetailField
from rest_framework import serializers
from django.core import serializers as Serializers

#fxns
from django.template.defaultfilters import slugify

class ContentSerializer(serializers.Serializer):
    name = serializers.CharField()
    midi = serializers.DictField()

class ProjectDetailSerializer(serializers.ModelSerializer):
    user = UserDetailField(read_only=True)
    collaborators = CollaboratorsListingField(many=True, read_only=False, default=[], allow_null=True)
    content = ContentSerializer(many=True, default=[], allow_null=True)

    class Meta:
        model = Project
        fields = (
            'id',
            'name',
            'project_slug',
            'resource_id',
            'created_dt',
            'updated_dt',
            'user',
            'collaborators',
            'content',
        )
        lookup_field = 'resource_id'

    def create(self, validated_data):
        collaborators = validated_data.pop('collaborators')
        project = Project.objects.create(
            user = self.context['request'].user,
            name = validated_data['name'],
            content = validated_data['content'],
        )
        project.collaborators.set(collaborators)
        return project

    def update(self, instance, validated_data):
        collaborators = validated_data.pop('collaborators')
        instance.name = validated_data['name']
        instance.project_slug = validated_data['project_slug']
        instance.resource_id = slugify(f"{self.context['request'].user}-{validated_data['name']}")
        instance.content = validated_data['content']
        instance.collaborators.set(collaborators)
        instance.save()
        return instance