from django.db import models

# Create your models here.
from django.db import models

# Modelo de Cliente
class Cliente(models.Model):
    nombre = models.CharField(max_length=100)  # Nombre completo
    email = models.EmailField(unique=True)     # Email único
    direccion = models.CharField(max_length=255)  # Dirección postal
    telefono = models.CharField(max_length=15, null=True, blank=True)  # Teléfono opcional

    def __str__(self):
        return self.nombre


# Modelo de Cuenta
class Cuenta(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, related_name='cuentas')  # Relación con Cliente
    tipo_cuenta = models.CharField(max_length=50)  # Ej.: "Ahorro", "Corriente"
    saldo = models.DecimalField(max_digits=10, decimal_places=2)  # Saldo en cuenta

    def __str__(self):
        return f"{self.tipo_cuenta} - {self.cliente.nombre}"


# Modelo de Préstamo
class Prestamo(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, related_name='prestamos')  # Relación con Cliente
    tipo_prestamo = models.CharField(max_length=50)  # Ej.: "Personal", "Hipotecario"
    monto = models.DecimalField(max_digits=10, decimal_places=2)  # Monto total del préstamo
    sucursal = models.ForeignKey('Sucursal', on_delete=models.SET_NULL, null=True)  # Relación con Sucursal

    def __str__(self):
        return f"{self.tipo_prestamo} - {self.cliente.nombre}"


# Modelo de Tarjeta
class Tarjeta(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, related_name='tarjetas')  # Relación con Cliente
    numero = models.CharField(max_length=16, unique=True)  # Número de tarjeta único
    tipo_tarjeta = models.CharField(max_length=50)  # Ej.: "Crédito", "Débito"
    fecha_vencimiento = models.DateField()  # Fecha de vencimiento

    def __str__(self):
        return f"{self.tipo_tarjeta} - {self.numero}"


# Modelo de Sucursal
class Sucursal(models.Model):
    nombre = models.CharField(max_length=100)  # Nombre de la sucursal
    direccion = models.CharField(max_length=255)  # Dirección
    telefono = models.CharField(max_length=15)  # Teléfono de contacto

    def __str__(self):
        return self.nombre
