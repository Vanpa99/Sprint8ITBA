from rest_framework import serializers
from .models import Cliente, Cuenta, Prestamo, Tarjeta, Sucursal
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']


# Serializer para Cliente
class ClienteSerializer(serializers.ModelSerializer):

    user = UserSerializer()

    class Meta:
        model = Cliente
        fields = '__all__'  # Todos los campos del modelo Cliente

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        
        user = User.objects.create_user(
            username=user_data['username'],
            password=user_data['password']
        )
        cliente = Cliente.objects.create(user=user, **validated_data)
        cuenta = Cuenta.objects.create(cliente=cliente,
            tipo_cuenta='CUENTA CORRIENTE PESOS',
            saldo=0.00)
        return cliente



# Serializer para Cuenta
class CuentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuenta
        fields = '__all__'


# Serializer para Préstamo
class PrestamoSerializer(serializers.ModelSerializer):

    cliente_nombre = serializers.SerializerMethodField()

    class Meta:
        model = Prestamo
        fields = '__all__'

    def get_cliente_nombre(self, obj):
        return obj.cliente.nombre if obj.cliente else None


# Serializer para Tarjeta
class TarjetaSerializer(serializers.ModelSerializer):

    cliente_nombre = serializers.SerializerMethodField()

    class Meta:
        model = Tarjeta
        fields = '__all__'
        read_only_fields = ['numero'] 


    def get_cliente_nombre(self, obj):
        return obj.cliente.nombre if obj.cliente else None


# Serializer para Sucursal
class SucursalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sucursal
        fields = '__all__'

