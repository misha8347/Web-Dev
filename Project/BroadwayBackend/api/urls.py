from django.contrib import admin
from django.urls import path, include
from api.views import news_fbv, event_cbv, location_cbv, club_fbv, ionya, user_cbv, ticket_fbv
from rest_framework_jwt.views import obtain_jwt_token

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path("register/", user_cbv.UserRegistration.as_view()),
    path("login/", obtain_jwt_token),
    path("news/", news_fbv.news_list),
    path("news/<int:news_id>/", news_fbv.news_detail),

    path("clubs/", club_fbv.club_list),
    path("clubs/<int:club_id>/", club_fbv.club_detail),
    path("clubs/<int:club_id>/news/", club_fbv.club_news),
    path("clubs/<int:club_id>/events/", club_fbv.club_events), 

    path("events/", event_cbv.EventListAPIView.as_view()),
    path("events/<int:event_id>/", event_cbv.EventDetailAPIView.as_view()),

    path("locations/", location_cbv.LocationListAPIView.as_view()),
    path("locations/<int:location_id>/", location_cbv.LocationDetailAPIView.as_view()),
    path("locations/<int:location_id/events/", location_cbv.LocationEventsAPIView.as_view()),

    path("main/news/", ionya.main_news_list),
    path("main/events/", ionya.main_events_list),
    path("events/topFive/", ionya.top_five_events),
    path("main/clubs/", ionya.main_clubs),

    path("tickets/", ticket_fbv.user_ticket_list),
    path("tickets/<int:ticket_id>/", ticket_fbv.user_ticket_details),

    path('user/clubs/', user_cbv.UserClubs.as_view()),
    path('user/', user_cbv.getUser.as_view())
]
