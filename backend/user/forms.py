# django imports
from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm

# import user model
from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'phone', 'profile_picture', 'dob')

class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'phone', 'profile_picture', 'dob')