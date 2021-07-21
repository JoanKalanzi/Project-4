from django.db import models


class Picture(models.Model):
  title = models.CharField(max_length=50, default=None)
  image = models.CharField(max_length=500, default=None)
  


def __str__(self):
  return f"{self.title}"