# djongo
from djongo import models

# django imports
from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin

class UserManager(BaseUserManager):
    def get_by_natural_key(self, username):
        return self.get(username=username)
    
    def create_user(self, username, password=None, **kwargs):
        if not username: raise ValueError('Please add a username. This field cannot be blank.')

        new_user = self.model(
            username=self.model.normalize_username(username),
            **kwargs
        )

        new_user.set_password(password)
        new_user.save(using=self._db)
        return new_user

    def create_superuser(self, username, password, **kwargs):
        new_user = self.create_user(
            username,
            password=password,
            **kwargs,
        )
        new_user.is_superuser = True
        new_user.is_staff = True
        new_user.is_admin = True
        new_user.save(using=self._db)
        return new_user

# start user class
class CustomUser(AbstractUser):
    objects = UserManager()
    
    # default fields are username, password, email, firstname, lastname
    # username and password are not optional
    dob = models.DateField(name='dob', blank=True, null=True)
    phone = models.CharField(max_length=15, name='phone', blank=True, null=True)
    profile_picture = models.ImageField(verbose_name='profile_picture', name='profile_picture', width_field=300, null=True, blank=True)
    
    def natural_key(self): return self.username
    def __str__(self): return f'{self.username}'