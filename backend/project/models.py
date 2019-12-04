# djongo
from djongo import models

# django
from django.template.defaultfilters import slugify

# model imports
from user.models import CustomUser

class ProjectManager(models.Manager):
    def get_by_natural_key(self, resource_id):
        return self.get(resource_id=resource_id)

class Project(models.Model):
    objects = ProjectManager()

    # model fields
    name = models.CharField(max_length=256, blank=False, null=False)
    project_slug = models.SlugField(max_length=500, blank=False, null=False)
    resource_id = models.CharField(max_length=500, blank=False, null=False, editable=False)
    content = models.ListField(name='content', blank=True, null=True, default=[])

    # relationships
    user = models.ForeignKey(CustomUser, related_name='project', on_delete=models.CASCADE)
    collaborators = models.ManyToManyField(CustomUser, related_name='collaborators', blank=True)

    # saved/updated
    created_dt = models.DateTimeField(editable=False)
    updated_dt = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        self.project_slug = slugify(self.name)
        self.resource_id = slugify(f"{self.user}-{self.name}")
        super(Project, self).save(*args, **kwargs)  

    class Meta:
        unique_together = ['user', 'project_slug', 'resource_id', 'created_dt']
        ordering = ['created_dt']

    def __str__(self):
        return "{}".format(self.resource_id)