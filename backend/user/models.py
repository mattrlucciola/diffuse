# djongo
from djongo import models

# django imports
from django.contrib.auth.models import AbstractUser, BaseUserManager

# class UserManager(models.Manager):
class UserManager(BaseUserManager):
    def get_by_natural_key(self, username):
        return self.get(username=username)
    
    # def create_user(self, username, email, password, **extra_fields):
    #     """
    #     Create and save a user with the given username, email, and password.
    #     """
    #     # normalize vital fields
    #     email = self.model.normalize_email(email)
    #     username = self.model.normalize_username(username)
    #     print('\n\nextra fields (below)')
    #     print(email, username)
    #     print(extra_fields)
    #     print(**extra_fields)
    #     print('extra fields (above)\n\n')
    #     if not username:
    #         raise ValueError('The given username must be set')
    #     if not email:
    #         raise ValueError('The given email must be set')
        
    #     # create user obj
    #     user = self.model(username=username, email=email, **extra_fields)

    #     # set the pwd
    #     user.set_password(password)
    #     user.save(using=self._db)
    #     return user
    
    def create_user(self, username, password=None, **kwargs):
        """
        Creates and saves a User with the given username and password.
        """
        print('\n\nuser, password')
        print(username, password)
        print('username, password\n\n')
        if not username:
            raise ValueError('Error: The User you want to create must have an username, try again')
        # if not username:
            # raise ValueError('Error: The User you want to create must have an username, try again')

        new_user = self.model(
            username=self.model.normalize_username(username),
            **kwargs
        )

        new_user.set_password(password)
        new_user.save(using=self._db)
        return new_user

    def create_superuser(self, username, password, **kwargs):
        """
        Creates and saves a superuser with the given username and password.
        """
        new_user = self.create_user(
            username,
            password=password,
            **kwargs,
        )
        new_user.staff = True
        new_user.admin = True
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
    
    # USERNAME_FIELD = "username"
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

#         new_user = self.model(
#             user=self.model.normalize_username(user),
#         )

#         new_user.set_password(password)
#         new_user.save(using=self._db)
#         return new_user

#     def create_staffuser(self, user, password):
#         """
#         Creates and saves a staff user with the given username and password.
#         """
#         new_user = self.create_user(
#             user,
#             password=password,
#         )
#         new_user.staff = True
#         new_user.save(using=self._db)
#         return new_user

#     def create_superuser(self, user, password):
#         """
#         Creates and saves a superuser with the given username and password.
#         """
#         new_user = self.create_user(
#             user,
#             password=password,
#         )
#         new_user.staff = True
#         new_user.admin = True
#         new_user.save(using=self._db)
#         return new_user