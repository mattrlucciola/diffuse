# djongo
from djongo import models

# django imports
from django.contrib.auth.models import AbstractUser

class UserManager(models.Manager):
    
    def create_user(self, email, password=None,is_active=True,is_staff=False,is_admin=False):
        """
        Creates and saves a User with the given email and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_staffuser(self, email, password):
        """
        Creates and saves a staff user with the given email and password.
        """
        user = self.create_user(
            email,
            password=password,
        )
        user.staff = True
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        """
        Creates and saves a superuser with the given email and password.
        """
        user = self.create_user(
            email,
            password=password,
        )
        user.staff = True
        user.admin = True
        user.save(using=self._db)
        return user
    
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