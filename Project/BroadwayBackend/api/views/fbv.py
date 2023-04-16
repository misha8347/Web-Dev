from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import News
from api.serializers import NewsSerializer

@api_view(['GET', 'POST'])
def news_list(request):
    if request.method == 'GET':
        news = News.objects.all()
        serializer = NewsSerializer(news, many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = NewsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'PUT', 'DELETE'])
def news_detail(request, news_id):
    try:
        news = News.objects.get(id=news_id)
    except News.DoesNotExist as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    
    if request.method == 'GET':
        serializer = NewsSerializer(news)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = NewsSerializer(instance=news, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        news.delete()
        return Response({'deleted': 'true'})
