from django.shortcuts import render
from api.models import News
from django.http import JsonResponse, HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

@csrf_exempt
def news(request):
    if request.method == 'GET':
        try:
            news = News.objects.all()
            news_json = [n.to_json() for n in news]
            return JsonResponse(news_json, safe=False)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    if request.method == 'POST':
        data = json.loads(request.body)
        title_new = data.get('title', '')
        text_new = data.get('text', '')
        image_new = data.get('image', '')
        likes_new = data.get('likes', '')
        dislikes_new = data.get('dislikes', '')
        news = News.objects.create(title=title_new, text=text_new, image=image_new, likes=likes_new, dislikes=dislikes_new)
        return JsonResponse(news.to_json())


@csrf_exempt
def news_detail(request, news_id):
    try:
        news_elem = News.objects.get(id=news_id)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(news_elem.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        news_added_title = data.get('title', '')
        news_added_text = data.get('text', '')
        news_added_image = data.get('image', '')
        news_added_likes = data.get('likes', '')
        news_added_dislikes = data.get('dislikes', '')

        news_elem.title = news_added_title
        news_elem.text = news_added_text
        news_elem.image = news_added_image
        news_elem.likes = news_added_likes
        news_elem.dislikes = news_added_dislikes
        news_elem.save()
        return JsonResponse(news_elem.to_json())
    elif request.method == 'DELETE':
        news_elem.delete()
        return JsonResponse({'deleted': 'Yes'})
