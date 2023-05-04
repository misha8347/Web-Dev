from rest_framework import status
from rest_framework.views import APIView    
from rest_framework.response import Response

from api.models import User, Profile, Club
from api.serializers import UserSerializer, ClubSerializer
from django.contrib.auth.hashers import make_password

from rest_framework.permissions import IsAuthenticated, AllowAny


class UserRegistration(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        hashed_password = make_password(password)

        if User.objects.filter(username=username).exists():
            return Response({'error': 'User with this username already exists'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['password'] = hashed_password
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserClubs(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        user = request.user
        profile = Profile.objects.get(user_id=user.id)

        clubs = profile.club.all()
        serializer = ClubSerializer(clubs, many=True)
        return Response(serializer.data)


class getUser(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)