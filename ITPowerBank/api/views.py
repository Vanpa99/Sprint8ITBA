from django.shortcuts import render
from rest_framework import viewsets
from .models import Cliente, Cuenta, Prestamo, Tarjeta, Sucursal
from .serializers import ClienteSerializer, CuentaSerializer, PrestamoSerializer, TarjetaSerializer, SucursalSerializer

# Create your views here.

# Vista para Cliente
class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer


# Vista para Cuenta
class CuentaViewSet(viewsets.ModelViewSet):
    queryset = Cuenta.objects.all()
    serializer_class = CuentaSerializer


# Vista para Préstamo
class PrestamoViewSet(viewsets.ModelViewSet):
    queryset = Prestamo.objects.all()
    serializer_class = PrestamoSerializer


# Vista para Tarjeta
class TarjetaViewSet(viewsets.ModelViewSet):
    queryset = Tarjeta.objects.all()
    serializer_class = TarjetaSerializer


# Vista para Sucursal
class SucursalViewSet(viewsets.ModelViewSet):
    queryset = Sucursal.objects.all()
    serializer_class = SucursalSerializer
