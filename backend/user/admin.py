# from https://wsvincent.com/django-custom-user-model-tutorial/
# django imports
from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

# user imports
# from .models import CustomUser
from django.contrib.auth import get_user_model
from .forms  import CustomUserCreationForm, CustomUserChangeForm

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = get_user_model()
    list_display = ['username']

admin.site.register(get_user_model(), CustomUserAdmin)