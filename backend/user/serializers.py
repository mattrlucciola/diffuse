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
# class CollaboratorsListingField(serializers.RelatedField):
#     def to_representation(self, value):
#         return value.username # figure out why this doesnt work {"id": value.id, "username": value.username}
#         # return "{0}'username':'{1}','id':{2}{3}".format('{', value.username, value.id, '}') # figure out why this doesnt work {"id": value.id, "username": value.username}
#     def to_internal_value(self, data):
#         obj_id = data
#         return User.objects.get(username=obj_id)
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
            "resource_id",
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
                "name": value.name,
                "user": value.user,
                "project_slug": value.project_slug,
                "resource_id": value.resource_id,
                "created_dt": value.created_dt,
                "updated_dt": value.updated_dt,
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