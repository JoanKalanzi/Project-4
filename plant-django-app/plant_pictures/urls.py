from django.urls import path
from django.urls.resolvers import URLPattern
from .views import PictureListView


urlpatterns = [
  path('', PictureListView.as_view())
]