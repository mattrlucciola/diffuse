# django imports
from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm

# import user model
from django.contrib.auth import get_user_model

class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = get_user_model()
        fields = ('username', 'email', 'phone', 'profile_picture', 'dob')

class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = get_user_model()
        fields = ('username', 'email', 'phone', 'profile_picture', 'dob')