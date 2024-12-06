from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClienteViewSet, CuentaViewSet, PrestamoViewSet, TarjetaViewSet, SucursalViewSet

router = DefaultRouter()
router.register(r'clientes', ClienteViewSet, basename='cliente')
router.register(r'cuentas', CuentaViewSet, basename='cuenta')
router.register(r'prestamos', PrestamoViewSet, basename='prestamo')
router.register(r'tarjetas', TarjetaViewSet, basename='tarjeta')
router.register(r'sucursales', SucursalViewSet, basename='sucursal')

urlpatterns = [
    path('', include(router.urls)),  # Incluye todas las rutas generadas por el router
]
