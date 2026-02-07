from django.urls import path
from .views import product_list, get_product_data, register_user


from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
urlpatterns = [
   path('products/', product_list, name="product_list"),
   path('products/<int:pk>/', get_product_data, name="product_data"),
   path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
   path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
   path('register/',register_user, name='register'),
]

