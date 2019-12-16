from .base import *

if "/var/www/" not in __file__:
   from .local import *
else:
   from .production import *