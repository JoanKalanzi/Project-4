from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Picture
from .serializers import PictureSerializer


class PictureListView(APIView):

  def get(self, _request):
    pictures = Picture.objects.all()
    serialized_pictures = PictureSerializer(pictures, many=True)
    return Response(serialized_pictures.data, status=status.HTTP_200_OK)


