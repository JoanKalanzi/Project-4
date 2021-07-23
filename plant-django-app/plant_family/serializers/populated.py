
from plant_pictures.serializers.common import PictureSerializer
from .common import FamilySerializer

class PopulatedFamilySerializer(FamilySerializer):

  pictures = PictureSerializer(many=True)