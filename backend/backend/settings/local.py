# local dev server settings

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["0.0.0.0", "127.0.0.1", "localhost"]

if 1 == 1:
    from .base import DATABASES
    from os import environ

    ALLOWED_HOSTS.append("178.128.146.249")
    DATABASES["USER"] = environ.get("diffuse_user")
    DATABASES["PASSWORD"] = environ.get("diffuse_pw")

# not sure which one to whitelist, 3000 or 8000
CORS_ORIGIN_WHITELIST = (
    # 'http://localhost:3000', # commented out
    # 'http://localhost:8000',
#     # "*"
)

CORS_REPLACE_HTTPS_REFERER      = False
HOST_SCHEME                     = "http://"
SECURE_PROXY_SSL_HEADER         = None
SECURE_SSL_REDIRECT             = False
SECURE_HSTS_SECONDS             = None
SECURE_HSTS_INCLUDE_SUBDOMAINS  = False
SECURE_FRAME_DENY               = False