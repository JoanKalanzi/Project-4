from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .models import Picture
from .serializers import PictureSerializer


class PictureListView(APIView):

  def get(self, _request):
    pictures = Picture.objects.all()
    print('PICTURES🌱', pictures)
    serialized_pictures = PictureSerializer(pictures, many=True)
    print('SERLIAZED💗', serialized_pictures.data)
    return Response(serialized_pictures.data, status=status.HTTP_200_OK)

  def post(self, request):
    print('REQUEST')
    picture_to_add = PictureSerializer(data=request.data)
    if picture_to_add.is_valid():
            picture_to_add.save()
            return Response(picture_to_add.data, status=status.HTTP_201_CREATED)
    return Response(picture_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class PictureDetailView(APIView):

  def get_picture(self, pk):
    try:
      return Picture.objects.get(pk=pk)
    except Picture.DoesNotExist:
      raise NotFound(detail="🚨 Can't find that picture")   

  def get(self, _request, pk):
    picture = self.get_picture(pk=pk)
    serialized_picture = PictureSerializer(picture)
    return Response(serialized_picture.data, status=status.HTTP_200_OK)

  def delete(self, _request, pk):
        picture_to_delete = self.get_picture(pk=pk)
        picture_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
  
  def put(self, request, pk):
        picture_to_edit = self.get_picture(pk=pk)
        updated_picture = PictureSerializer(picture_to_edit, data=request.data)
        if updated_picture.is_valid():
            updated_picture.save()
            return Response(updated_picture.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_picture.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)



