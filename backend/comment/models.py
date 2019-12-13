# djongo
from djongo import models

# model imports
# from user.models import CustomUser
from django.contrib.auth import get_user_model
from project.models import Project

# Create your models here.

class Comment(models.Model):
    # model fields
    content = models.TextField()

    # relationships
    author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    
    # saved/updated
    created_dt = models.DateTimeField(editable=False)
    updated_dt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "comment content is {}".format(self.content)