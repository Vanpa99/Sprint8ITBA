from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.decorators import action
from .models import Cliente, Cuenta, Prestamo, Tarjeta, Sucursal
from .serializers import ClienteSerializer, CuentaSerializer, PrestamoSerializer, TarjetaSerializer, SucursalSerializer

# Create your views here.

# Vista para Cliente
class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    permission_classes = [IsAuthenticated]  # Solo clientes autenticados pueden acceder

    

# Vista para Cuenta
class CuentaViewSet(viewsets.ModelViewSet):
    queryset = Cuenta.objects.all()
    serializer_class = CuentaSerializer


# Vista para Préstamo
class PrestamoViewSet(viewsets.ModelViewSet):
    queryset = Prestamo.objects.all()
    serializer_class = PrestamoSerializer
    permission_classes = [IsAuthenticated]


# Vista para Tarjeta
class TarjetaViewSet(viewsets.ModelViewSet):
    queryset = Tarjeta.objects.all()
    serializer_class = TarjetaSerializer


# Vista para Sucursal
class SucursalViewSet(viewsets.ModelViewSet):
    queryset = Sucursal.objects.all()
    serializer_class = SucursalSerializer


# Obtener datos de un cliente:
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def obtener_datos_cliente(request):
    try:
        cliente = Cliente.objects.get(id=request.user.id)  # Asumimos que el ID del usuario coincide con el cliente
    except Cliente.DoesNotExist:
        return Response({"error": "Cliente no encontrado"}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = ClienteSerializer(cliente)
    return Response(serializer.data)


# # Obtener saldo de cuenta de un cliente:
# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def obtener_saldo(request):
#     try:
#         cuenta = Cuenta.objects.get(cliente=request.user.id)  # Relación con cliente autenticado
#     except Cuenta.DoesNotExist:
#         return Response({"error": "Cuenta no encontrada"}, status=status.HTTP_404_NOT_FOUND)
    
#     return Response({
#         "tipo_cuenta": cuenta.tipo_cuenta,
#         "saldo": str(cuenta.saldo)  # Convertimos el saldo a string para mostrar
#     })



@api_view(['GET'])
def obtener_saldo(request):
    cuentas = Cuenta.objects.filter(cliente=request.user.id)  # Filtrar todas las cuentas del cliente

    if not cuentas.exists():  # Si no hay cuentas
        return Response({"error": "No se encontraron cuentas asociadas"}, status=status.HTTP_404_NOT_FOUND)

    # Serializar y devolver todas las cuentas
    cuentas_serializadas = [
        {"tipo_cuenta": cuenta.tipo_cuenta, "saldo": str(cuenta.saldo)}
        for cuenta in cuentas
    ]

    return Response(cuentas_serializadas)

# Obtener monto de préstamos de un cliente:
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def obtener_prestamos_cliente(request):
    prestamos = Prestamo.objects.filter(cliente=request.user.id)
    if not prestamos:
        return Response({"error": "No se encontraron préstamos para este cliente"}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = PrestamoSerializer(prestamos, many=True)
    return Response(serializer.data)

# Obtener monto de préstamos de una sucursal (Empleado autenticado)
@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdminUser])
def obtener_prestamos_sucursal(request, sucursal_id):
    prestamos = Prestamo.objects.filter(sucursal_id=sucursal_id)
    serializer = PrestamoSerializer(prestamos, many=True)
    return Response(serializer.data)

# Obtener tarjetas asociadas a un cliente (Empleado autenticado)
@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdminUser])
def obtener_tarjetas_cliente(request, cliente_id):
    tarjetas = Tarjeta.objects.filter(cliente_id=cliente_id)
    serializer = TarjetaSerializer(tarjetas, many=True)
    return Response(serializer.data)


# Generar solicitud de préstamo para un cliente (Empleado autenticado)
@api_view(['POST'])
@permission_classes([IsAuthenticated, IsAdminUser])
def generar_prestamo(request):
    cliente_id = request.data.get('cliente_id')
    monto = request.data.get('monto')
    tipo_prestamo = request.data.get('tipo_prestamo')
    cliente = Cliente.objects.get(id=cliente_id)
    prestamo = Prestamo.objects.create(cliente=cliente, monto=monto, tipo_prestamo=tipo_prestamo)
    return Response(PrestamoSerializer(prestamo).data)


#Anular solicitud de préstamo de un cliente (Empleado autenticado)
@api_view(['POST'])
@permission_classes([IsAuthenticated, IsAdminUser])
def anular_prestamo(request, prestamo_id):
    prestamo = Prestamo.objects.get(id=prestamo_id)
    prestamo.delete()
    return Response({"message": "Préstamo anulado"})


#Modificar dirección de un cliente (Cliente o Empleado autenticado)
@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def modificar_direccion(request, cliente_id):
    cliente = Cliente.objects.get(id=cliente_id)
    cliente.direccion = request.data.get('direccion')
    cliente.save()
    return Response(ClienteSerializer(cliente).data)


#Listado de todas las sucursales (Público)
@api_view(['GET'])
def listado_sucursales(request):
    sucursales = Sucursal.objects.all()
    serializer = SucursalSerializer(sucursales, many=True)
    return Response(serializer.data)
