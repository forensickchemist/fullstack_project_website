from django.shortcuts import get_object_or_404
from django.shortcuts import render
from .models import Product
from .serializers import ProductSerializer, RegisterSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status 

    


# Create your views here.

@api_view(['GET'])
def product_list(request):
    product = Product.objects.all()
    serializer = ProductSerializer(product, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_product_data(request, pk):
    product = get_object_or_404(Product, pk=pk)
    serializer = ProductSerializer(product)
    return Response(serializer.data)

@api_view(['POST'])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message' : "User Registered Successfully"}, status = status.HTTP_201_CREATED)
    return Response(serializer.erorr, status=status.HTTP_400_BAD_REQUEST)

    