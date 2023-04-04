from django.shortcuts import render
from api.models import Product, Category
from django.http import HttpResponse, JsonResponse
# Create your views here.

def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)

def product_detail(request, product_id):
    product = Product.objects.get(id = product_id)
    if(product):
        return JsonResponse(product.to_json())
    return HttpResponse('product doesnt exist')

def category_list(request):
    categories = Category.objects.all()
    categories_json = [cat.to_json() for cat in categories]
    return JsonResponse(categories_json, safe=False)

def category_name(request, category_id):
    category = Category.objects.get(id = category_id)
    if(category):
        return JsonResponse(category.to_json())
    return ('category doesnt exist')


def category_products(request, cat_id):
    products = Product.objects.filter(category_id = cat_id)
    if(products):
        return JsonResponse([p.to_json() for p in products], safe=False)
    return HttpResponse('products not found')