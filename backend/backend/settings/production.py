DEBUG = False
ALLOWED_HOSTS = ["178.128.146.249", "diffcult.com"]

# make sure its empty
CORS_ORIGIN_WHITELIST = (
)

CORS_REPLACE_HTTPS_REFERER      = True
HOST_SCHEME                     = "https://"
SECURE_PROXY_SSL_HEADER         = ('HTTP_X_FORWARDED_PROTO', 'https')
SECURE_SSL_REDIRECT             = True

# these four were commented out (below)
SESSION_COOKIE_SECURE           = True
CSRF_COOKIE_SECURE              = True
CSRF_USE_SESSIONS               = True
CSRF_COOKIE_HTTPONLY            = False
# these four were commented out (above)

SECURE_HSTS_SECONDS             = 1000000
SECURE_HSTS_INCLUDE_SUBDOMAINS  = True
SECURE_FRAME_DENY               = True