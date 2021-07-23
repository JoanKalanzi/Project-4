from django.urls import path 
from .views import FamilyListView

urlpatterns = [
    path('', FamilyListView.as_view())
]