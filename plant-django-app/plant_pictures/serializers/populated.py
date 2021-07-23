from comments.serializers.populated import PopulatedCommentSerializer
from ..serializers.common import PictureSerializer
# from genres.serializers.common import GenreSerializer
from jwt_auth.serializer import UserSerializer


class PopulatedPictureSerializer(PictureSerializer):

    comments = PopulatedCommentSerializer(many=True)
    # genres = GenreSerializer(many=True)
    # owner = UserSerializer()