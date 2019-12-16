from .base import *

if True or "/var/www/" not in __file__:
   from .local import *
else:
   from .production import *