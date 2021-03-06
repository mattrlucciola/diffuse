from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.settings import api_settings

from project.models import Project

User = get_user_model()

class CollaboratorsListingField(serializers.Serializer):
    username = serializers.CharField()
    id = serializers.IntegerField()
    def to_internal_value(self, data):
        obj_id = data
        return User.objects.get(username=obj_id)
class UserDetailField(serializers.RelatedField):
    def to_representation(self, value):
        return {"id": value.id, "username": value.username}
class ProjectBasicSerializer(serializers.ModelSerializer):
    user = UserDetailField(read_only=True)
    collaborators = CollaboratorsListingField(many=True, read_only=False, default=[], allow_null=True)
    class Meta:
        model = Project
        fields = [
            "name",
            "user",
            "project_slug",
            "resource_slug",
            "created_dt",
            "updated_dt",
            "collaborators",
        ]

class ProjectListingField(serializers.RelatedField):
    def to_representation(self, value):
        if True:
            serializer = ProjectBasicSerializer(value)
            return serializer.data
        else:
            return {
                "name": value['name'],
                "user": value['user'],
                "project_slug": value['project_slug'],
                "resource_slug": value['resource_slug'],
                "created_dt": value['created_dt'],
                "updated_dt": value['updated_dt'],
            }

class UserSerializer(serializers.ModelSerializer):
    project = ProjectListingField(many=True, read_only=True)

    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'password',
            'first_name',
            'last_name',
            'email',
            'dob',
            'phone',
            'profile_picture',
            'project',
        )
        lookup_field = 'username'
    
    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user
    
    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            if attr == 'password':
                instance.set_password(value)
            else:
                setattr(instance, attr, value)
        instance.set_password(validated_data['password'])
        instance.save()
        return instance