# djongo
from djongo import models

# django imports
from django.contrib.auth.models import AbstractUser, BaseUserManager

# class UserManager(models.Manager):
class UserManager(BaseUserManager):
    def get_by_natural_key(self, username):
        return self.get(username=username)
    
    def create_user(self, username, password, **extra_fields):
        """
        Create and save a user with the given username, email, and password.
        """
        if not username:
            raise ValueError('The given username must be set')

        # normalize vital fields
        username = self.model.normalize_username(username)

        # create user obj
        user = self.model(username=username, **extra_fields)

        # set the pwd
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password=None):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(username, password=password)
        user.is_admin = True
        user.save(using=self._db)

        return user

# start user class
class CustomUser(AbstractUser):
    objects = UserManager()
    
    # default fields are username, password, email, firstname, lastname
    # username and password are not optional
    dob = models.DateField(name='dob', blank=True, null=True)
    phone = models.CharField(max_length=15, name='phone', blank=True, null=True)
    profile_picture = models.ImageField(verbose_name='profile_picture', name='profile_picture', width_field=300, null=True, blank=True)
    
    USERNAME_FIELD = "username"
    # REQUIRED_FIELDS = ['username']
    
    # @property
    # def is_staff(self):
        # "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        # return self.is_admin

    def natural_key(self):
        return self.username
    def __str__(self):
        return f'{self.username}'


# class UserManager(BaseUserManager):
#     def create_user(self, user, password=None):
#         """
#         Creates and saves a User with the given username and password.
#         """
#         if not user:
#             raise ValueError('Error: The User you want to create must have an username, try again')

#         my_user = self.model(
#             user=self.model.normalize_username(user),
#         )

#         my_user.set_password(password)
#         my_user.save(using=self._db)
#         return my_user

#     def create_staffuser(self, user, password):
#         """
#         Creates and saves a staff user with the given username and password.
#         """
#         my_user = self.create_user(
#             user,
#             password=password,
#         )
#         my_user.staff = True
#         my_user.save(using=self._db)
#         return my_user

#     def create_superuser(self, user, password):
#         """
#         Creates and saves a superuser with the given username and password.
#         """
#         my_user = self.create_user(
#             user,
#             password=password,
#         )
#         my_user.staff = True
#         my_user.admin = True
#         my_user.save(using=self._db)
#         return my_user