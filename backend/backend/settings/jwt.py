# modules
from datetime import timedelta
# local imports
from .base import SECRET_KEY

JWT_AUTH = {
    'JWT_SECRET_KEY': SECRET_KEY,
    'JWT_ALGORITHM': 'HS256',
    'JWT_ALLOW_REFRESH': True,
    'JWT_EXPIRATION_DELTA': timedelta(days=7),
    'JWT_REFRESH_EXPIRATION_DELTA': timedelta(days=28),
}

JWT_AUTH['JWT_RESPONSE_PAYLOAD_HANDLER'] = 'simple_rest.utils.custom_jwt_response_handler'
REST_USE_JWT = True