from jwt_auth.models import User
from django.db import models


class Picture(models.Model):
    title = models.CharField(max_length=50, default=None)
    image = models.CharField(max_length=500, default=None)
    family = models.ManyToManyField(
      'plant_family.Family', related_name="pictures"
    )
    owner = models.ForeignKey( 
        "jwt_auth.User", 
        related_name="pictures",
        on_delete= models.CASCADE 
    )

  


    def __str__(self):
        return f"{self.title} "