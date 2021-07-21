from django.urls import path
from django.urls.resolvers import URLPattern
from .views import PictureListView, PictureDetailView


urlpatterns = [
  path('', PictureListView.as_view()),
  path('<int:pk>/', PictureDetailView.as_view())
]