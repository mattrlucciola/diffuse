# djongo
from djongo import models

# django imports
from django.contrib.auth.models import AbstractUser

class UserManager(models.Manager):
    
    def _create_user(self, username, email, password, **extra_fields):
        """
        Create and save a user with the given username, email, and password.
        """
        if not username:
            raise ValueError('The given username must be set')
        email = self.normalize_email(email)
        username = self.model.normalize_username(username)
        user = self.model(username=username, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        
        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        return self._create_user(username, email, password, **extra_fields)
    
    def get_by_natural_key(self, username):
        return self.get(username=username)

# start user class
class CustomUser(AbstractUser):
    objects = UserManager()
    
    # default fields are username, password, email, firstname, lastname
    # username and password are not optional
    dob = models.DateField(name='dob', blank=True, null=True)
    phone = models.CharField(max_length=15, name='phone', blank=True, null=True)
    profile_picture = models.ImageField(verbose_name='profile_picture', name='profile_picture', width_field=300, null=True, blank=True)

    def natural_key(self):
        return self.username
    def __str__(self):
        return f'{self.username}'