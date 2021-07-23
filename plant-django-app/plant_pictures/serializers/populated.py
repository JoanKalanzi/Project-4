from comments.serializers.populated import PopulatedCommentSerializer
from ..serializers.common import PictureSerializer
from plant_family.serializers.common import FamilySerializer
# from jwt_auth.serializer import UserSerializer


class PopulatedPictureSerializer(PictureSerializer):

    comments = PopulatedCommentSerializer(many=True)
    family= FamilySerializer(many=True)
    # owner = UserSerializer()