from jwt_auth.models import User
from django.db import models


class Picture(models.Model):
    title = models.CharField(max_length=50, default=None)
    image = models.CharField(max_length=500, default=None)
    family = models.ManyToManyField(
      'plant_family.Family', related_name="pictures"
    )
<<<<<<< HEAD
    user = models.ForeignKey( 
=======
    owner = models.ForeignKey( 
>>>>>>> 458e0f6f2fb395cb6b97f09ec3d2ec6dda3da002
        "jwt_auth.User", 
        related_name="pictures",
        on_delete= models.CASCADE 
    )

  


    def __str__(self):
        return f"{self.title} "