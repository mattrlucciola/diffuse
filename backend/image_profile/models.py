# django imports
from django.db import models
from django.template.defaultfilters import slugify
# local imports
from project.models import Project as model
from utils.models import image_upload_to

# managers
class ImageProjectManager(models.Manager):
    def get_by_natural_key(self, pk):
        return self.get(pk=pk)

# models
class ImageProject(models.Model):
    objects = ImageProjectManager()
    project = models.ForeignKey(model, on_delete=models.CASCADE)
    image = models.ImageField(upload_to=image_upload_to)
    name = models.CharField(
        max_length=150,
        blank=True,
        null=False,
        default='',
    )
    description = models.TextField(
        max_length=15000,
        blank=True,
        null=False,
        default='',
    )
    position = models.PositiveSmallIntegerField(
        unique=False,
        blank=False,
        null=False,
    )
    dt_created = models.DateTimeField(
        auto_now=True,
        editable=False,
    )
    dt_updated = models.DateTimeField(
        auto_now=True,
        editable=True,
    )
    def save(self, *args, **kwargs):
        image_ct = len(ImageProject.objects.filter(project=self.project.pk)) # ignore the linter error, it has the project.pk
        position = image_ct + 1
        self.position = position
        super(ImageProject, self).save(*args, **kwargs)
    def __str__(self): return f"{self.pk}"

    class Meta:
        verbose_name = "Image: Profile"
        verbose_name_plural = "Images: Profile"
        ordering = ['project', 'position']
