def image_upload_to(instance, filename):
    return f"profiles/{instance.user.pk}/{filename}"