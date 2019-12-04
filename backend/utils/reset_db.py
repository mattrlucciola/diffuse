from pymongo import MongoClient
client = MongoClient('127.0.0.1', 27017)
db = client['diffuse']
coll_list = [
    'api_comment',
    'api_customuser',
    'api_customuser_groups',
    'api_customuser_user_permissions',
    'api_history',
    'api_project',
    'api_project_authors',
    'auth_group',
    'auth_group_permissions',
    'auth_permission',
    'django_admin_log',
    'django_content_type',
    'django_migrations',
    'django_session',
]

# loop thru and delete all collections
for coll_name in coll_list:
    coll = db[coll_name]
    coll.drop()

