from django.contrib import admin
from django.urls import path, include
from api.views import fbv, cbv

urlpatterns = [
    path("news/", fbv.news_list),
    path("news/<int:news_id>/", fbv.news_detail),
    path("events/", cbv.EventListAPIView.as_view()),
    path("events/<int:event_id>/", cbv.EventDetailAPIView.as_view())
]
