# djongo
from djongo import models

# django
from django.template.defaultfilters import slugify

# model imports
from django.contrib.auth import get_user_model

class ProjectManager(models.Manager):
    def get_by_natural_key(self, resource_slug):
        return self.get(resource_slug=resource_slug)

class Project(models.Model):
    objects = ProjectManager()

    # model fields
    # resource_slug
    name = models.CharField(max_length=256, blank=False, null=False)
    project_slug = models.SlugField(max_length=500, blank=False, null=False)
    resource_slug = models.CharField(max_length=500, blank=False, null=False, editable=False)
    content = models.ListField(name='content', blank=True, null=True, default=[])

    # relationships
    user = models.ForeignKey(get_user_model(), related_name='project', on_delete=models.CASCADE)
    collaborators = models.ManyToManyField(get_user_model(), related_name='collaborators', blank=True)

    # saved/updated
    created_dt = models.DateTimeField(auto_now=True, editable=False)
    updated_dt = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        self.project_slug = slugify(self.name)
        self.resource_slug = slugify(f"{self.user}-{self.name}")
        super(Project, self).save(*args, **kwargs)  

    class Meta:
        unique_together = ['user', 'project_slug', 'resource_slug', 'created_dt']
        ordering = ['created_dt']

    def __str__(self): return f"{self.resource_slug}"