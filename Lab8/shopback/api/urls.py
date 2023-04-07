from django.urls import path, re_path
from api import views

urlpatterns = [
    path('products/', views.product_list),
    path('products/<int:product_id>/', views.product_detail),
    path('categories/', views.category_list),
    path('categories/<int:category_id>/', views.category_name),
    path('categories/<int:cat_id>/products/', views.category_products)
]