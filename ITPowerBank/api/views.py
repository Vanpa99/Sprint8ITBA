from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.decorators import action
from .models import Cliente, Cuenta, Prestamo, Tarjeta, Sucursal
from .serializers import ClienteSerializer, CuentaSerializer, PrestamoSerializer, TarjetaSerializer, SucursalSerializer
from decimal import Decimal

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

    def create(self, request, *args, **kwargs):
        # Obtener datos del request
        cliente_id = request.data.get('cliente')
        monto = request.data.get('monto')

        # Validar que exista una cuenta asociada al cliente
        cuenta = get_object_or_404(Cuenta, cliente_id=cliente_id)

        # Crear el préstamo usando el serializador
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        # Sumar el monto del préstamo al saldo de la cuenta
        cuenta.saldo = Decimal(str(monto))  +  cuenta.saldo
        cuenta.save()

        # Responder con los datos del préstamo creado
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)    


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
        es_cliente= True
    except Cliente.DoesNotExist:
        es_cliente= False
        return Response({"error": "Cliente no encontrado"}, status=status.HTTP_404_NOT_FOUND)
    
    if request.user.is_superuser:
        rol = "superadmin"
    elif request.user.is_staff:
        rol = "empleado"
    elif es_cliente:
        rol = "cliente"
    else:
        rol = "desconocido"


    datos_cliente = ClienteSerializer(cliente).data if es_cliente else {}
    datos_cliente['rol'] = rol  # Agregar el rol al JSON
    return Response(datos_cliente, status=status.HTTP_200_OK)


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
    try:
        # Verificar si el cliente existe
        cliente = Cliente.objects.get(id=cliente_id)
    except Cliente.DoesNotExist:
        return Response({"error": "Cliente no encontrado"}, status=status.HTTP_404_NOT_FOUND)

    # Obtener las tarjetas asociadas al cliente
    tarjetas = Tarjeta.objects.filter(cliente_id=cliente_id)
    tarjetas_serializer = TarjetaSerializer(tarjetas, many=True)


    return Response(tarjetas_serializer.data, status=status.HTTP_200_OK)



@api_view(['POST'])
@permission_classes([IsAuthenticated, IsAdminUser])
def crear_prestamo(request):
    # Obtener datos del cuerpo de la solicitud
    cliente_id = request.data.get('cliente')
    monto = request.data.get('monto')
    tipo_prestamo = request.data.get('tipo_prestamo')
    sucursal_id = request.data.get('sucursal')

    # Validar que todos los datos necesarios estén presentes
    if not cliente_id or not monto or not tipo_prestamo or not sucursal_id:
        return Response(
            {"error": "Faltan datos requeridos: cliente, monto, tipo_prestamo o sucursal."},
            status=status.HTTP_400_BAD_REQUEST,
        )

    # Validar que el monto sea un número
    try:
        monto = float(monto)
        if monto <= 0:
            raise ValueError
    except ValueError:
        return Response(
            {"error": "El monto debe ser un número positivo."},
            status=status.HTTP_400_BAD_REQUEST,
        )

    # Validar la existencia de la cuenta asociada al cliente
    cuenta = get_object_or_404(Cuenta, cliente_id=cliente_id)

    # Crear el préstamo
    serializer = PrestamoSerializer(data=request.data)
    if serializer.is_valid():
        prestamo = serializer.save()

        # Sumar el monto al saldo de la cuenta
        cuenta.saldo += monto
        cuenta.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#Anular solicitud de préstamo de un cliente (Empleado autenticado)
@api_view(['POST'])
@permission_classes([IsAuthenticated, IsAdminUser])
def anular_prestamo(request, prestamo_id):
    # Obtener el préstamo, si no existe lanza un 404
    prestamo = get_object_or_404(Prestamo, id=prestamo_id)
    
    # Obtener la cuenta asociada al cliente del préstamo
    cuenta = get_object_or_404(Cuenta, cliente=prestamo.cliente)

    # Descontar el monto del préstamo del saldo en la cuenta
    cuenta.saldo -= prestamo.monto
    cuenta.save()

    # Eliminar el préstamo
    prestamo.delete()

    return Response({"message": "Préstamo anulado y saldo actualizado"})


#Modificar dirección de un cliente (Cliente o Empleado autenticado)
@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def modificar_direccion(request, cliente_id):
    try:
        cliente = Cliente.objects.get(id=cliente_id)
        es_cliente = True
    except Cliente.DoesNotExist:
        es_cliente= False
        return Response({"error": "Cliente no encontrado"}, status=status.HTTP_404_NOT_FOUND)


    nueva_direccion = request.data.get('direccion')
    if not nueva_direccion:
        return Response({"error": "El campo 'direccion' es requerido"}, status=status.HTTP_400_BAD_REQUEST)

    cliente.direccion = nueva_direccion
    cliente.save()


    if request.user.is_superuser:
        rol = "superadmin"
    elif request.user.is_staff:
        rol = "empleado"
    elif es_cliente:
        rol = "cliente"
    else:
        rol = "desconocido"


    datos_cliente = ClienteSerializer(cliente).data if es_cliente else {}
    datos_cliente['rol'] = rol  # Agregar el rol al JSON
    return Response(datos_cliente, status=status.HTTP_200_OK)


#Listado de todas las sucursales (Público)
@api_view(['GET'])
def listado_sucursales(request):
    sucursales = Sucursal.objects.all()
    serializer = SucursalSerializer(sucursales, many=True)
    return Response(serializer.data)
