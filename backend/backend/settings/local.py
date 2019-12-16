# local dev server settings

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

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
# CSRF_COOKIE_SECURE              = False
# SESSION_COOKIE_SECURE           = False
# CSRF_COOKIE_HTTPONLY            = False