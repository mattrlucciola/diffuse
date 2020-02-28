# modules
from os import environ
# local imports
from .base import DATABASES

DEBUG = False

DATABASES["default"]["USER"] = environ.get("diffuse_mongo_user")
DATABASES["default"]["PASSWORD"] = environ.get("diffuse_mongo_pw")
DATABASES["default"]["HOST"] = '127.0.0.1'
DATABASES["default"]["PORT"] = 27017

CORS_REPLACE_HTTPS_REFERER      = True
HOST_SCHEME                     = "https://"
SECURE_PROXY_SSL_HEADER         = ('HTTP_X_FORWARDED_PROTO', 'https')
SECURE_SSL_REDIRECT             = True
SECURE_HSTS_SECONDS             = 1000000
SECURE_HSTS_INCLUDE_SUBDOMAINS  = True
SECURE_FRAME_DENY               = True