# from https://stackoverflow.com/questions/1737017/django-auto-now-and-auto-now-add/1737078#1737078
from django.utils import timezone

def save(self, model, *args, **kwargs):
    ''' On save, update timestamps '''
    if not self.id:
        self.created = timezone.now()
    self.modified = timezone.now()
    return super(model, self).save(*args, **kwargs)