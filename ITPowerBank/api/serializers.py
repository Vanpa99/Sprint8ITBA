from rest_framework import serializers
from .models import Cliente, Cuenta, Prestamo, Tarjeta, Sucursal

# Serializer para Cliente
class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'  # Todos los campos del modelo Cliente


# Serializer para Cuenta
class CuentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuenta
        fields = '__all__'


# Serializer para Préstamo
class PrestamoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prestamo
        fields = '__all__'


# Serializer para Tarjeta
class TarjetaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarjeta
        fields = '__all__'
        read_only_fields = ['numero'] 


# Serializer para Sucursal
class SucursalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sucursal
        fields = '__all__'

