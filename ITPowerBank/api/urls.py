from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClienteViewSet, CuentaViewSet, PrestamoViewSet, TarjetaViewSet, SucursalViewSet, obtener_datos_cliente, obtener_saldo, obtener_prestamos_cliente, obtener_prestamos_sucursal, obtener_tarjetas_cliente, generar_prestamo, anular_prestamo, modificar_direccion, listado_sucursales

# Crear el router
router = DefaultRouter()
router.register(r'clientes', ClienteViewSet, basename='cliente')
router.register(r'cuentas', CuentaViewSet, basename='cuenta')
router.register(r'prestamos', PrestamoViewSet, basename='prestamo')
router.register(r'tarjetas', TarjetaViewSet, basename='tarjeta')
router.register(r'sucursales', SucursalViewSet, basename='sucursal')

# Registrar las rutas del router
urlpatterns = [
    path('', include(router.urls)),
    path('cliente/datos/', obtener_datos_cliente, name='obtener_datos_cliente'),
    path('cliente/saldo/', obtener_saldo, name='obtener_saldo'),
    path('cliente/prestamos/', obtener_prestamos_cliente, name='obtener_prestamos_cliente'),
    path('prestamos/sucursal/<int:sucursal_id>/', obtener_prestamos_sucursal, name='obtener_prestamos_sucursal'),
    path('tarjetas/cliente/<int:cliente_id>/', obtener_tarjetas_cliente, name='obtener_tarjetas_cliente'),
    path('prestamos/solicitar/', generar_prestamo, name='generar_prestamo'),
    path('prestamos/<int:prestamo_id>/anular/', anular_prestamo, name='anular_prestamo'),
    path('cliente/<int:cliente_id>/modificar-direccion/', modificar_direccion, name='modificar_direccion'),
    path('sucursales/', listado_sucursales, name='listado_sucursales'),
]

