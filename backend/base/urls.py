from django.urls import path
from .views import product_list, get_product_data

urlpatterns = [
   path('products/', product_list, name="product_list"),
   path('products/<int:pk>/', get_product_data, name="product_data"),
]

