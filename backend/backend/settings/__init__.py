# modules
from os import getuid
from pwd import getpwuid
# local imports
from .base import *

# get username
username = getpwuid(getuid())[0]

if "development" not in username:
   from .development import *
else:
   from .production import *