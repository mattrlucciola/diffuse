# modules
from os import getuid
from pwd import getpwuid

# get username
username = getpwuid(getuid())[0]

# import settings
from .base import *
if "development" not in username:
   from .development import *
else:
   from .production import *