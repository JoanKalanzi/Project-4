
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status 

from .serializers.populated import PopulatedFamilySerializer
from .models import Family

class FamilyListView(APIView):

    def get(self, _request):
        families = Family.objects.all()
        serialized_families = PopulatedFamilySerializer(families, many=True)
        return Response(serialized_families.data, status=status.HTTP_200_OK)