# djongo
from djongo import models

# model imports
from project.models import Project

class History(models.Model):
    # model fields
    history_array = models.ListField()
    
    # relationships
    project = models.OneToOneField(Project, on_delete=models.CASCADE)

    # saved/updated
    created_dt = models.DateTimeField(editable=False)
    updated_dt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "history is {}".format(self.history_array)