from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User 
from django.core.validators import MinLengthValidator
# Create your models here.
from django.db import models
from datetime import timedelta
import random

# Modelo de Cliente
class Cliente(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, unique=True) #AGREGADO CLIENTE-USER RELACION
    nombre = models.CharField(max_length=100)  # Nombre completo
    apellido = models.CharField(max_length=100)  # Apellido completo
    email = models.EmailField(unique=True)     # Email único
    dni = models.CharField(max_length=9, unique=True, validators=[MinLengthValidator(7)])
    direccion = models.CharField(max_length=255)  # Dirección postal
    telefono = models.CharField(max_length=15, null=True, blank=True)  # Teléfono opcional
    # contrasena = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre


# Modelo de Cuenta
class Cuenta(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, related_name='cuentas')  # Relación con Cliente
    tipo_cuenta = models.CharField(max_length=50, choices=[('CUENTA CORRIENTE PESOS', 'Cuenta Corriente Pesos'), ('CUENTA CORRIENTE DOLARES', 'Cuenta Corriente Dolares')])  # Ej.: "Ahorro", "Corriente"
    saldo = models.DecimalField(max_digits=10, decimal_places=2)  # Saldo en cuenta

    def __str__(self):
        return f"{self.tipo_cuenta} - {self.cliente.nombre}"


# Modelo de Préstamo
class Prestamo(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, related_name='prestamos')  # Relación con Cliente
    tipo_prestamo = models.CharField(max_length=50, choices=[('HIPOTECARIO', 'Hipotecario'), ('PRENDARIO', 'Prendario'), ('PERSONAL', 'Personal')])  # Ej.: "Personal", "Hipotecario"
    monto = models.DecimalField(max_digits=10, decimal_places=2)  # Monto total del préstamo
    sucursal = models.ForeignKey('Sucursal', on_delete=models.SET_NULL, null=True)  # Relación con Sucursal

    def __str__(self):
        return f"{self.tipo_prestamo} - {self.cliente.nombre}"


# Modelo de Tarjeta

def get_default_fecha_vencimiento():
    return timezone.now() + timedelta(days=365)



class Tarjeta(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, related_name='tarjetas')  # Relación con Cliente
    marca = models.CharField(max_length=10, choices=[("VISA", "Visa"), ( "MASTERCARD","Mastercard")], default="VISA") 
    numero = models.CharField(max_length=16, unique=True)  # Número de tarjeta único
    tipo_tarjeta = models.CharField(max_length=50, choices=[("DEBITO", "Debito"), ( "CREDITO","Credito")])  # Ej.: "Crédito", "Débito"
    fecha_vencimiento = models.DateField(default=get_default_fecha_vencimiento )  # Fecha de vencimiento
    fecha_emicion = models.DateField(default= timezone.now)  # Fecha de vencimiento
    

    @staticmethod
    def generar_num():
        numero = [random.randint(0, 9) for _ in range(16)]
        return ''.join(map(str, numero))


    def save(self, *args, **kwargs):

        if not self.numero:
            while True:
                numero_generado = Tarjeta.generar_num()
                if not Tarjeta.objects.filter(numero=numero_generado).exists():
                    self.numero = numero_generado
                    break
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.tipo_tarjeta} - {self.numero}"


# Modelo de Sucursal
class Sucursal(models.Model):
    nombre = models.CharField(max_length=100)  # Nombre de la sucursal
    direccion = models.CharField(max_length=255)  # Dirección
    telefono = models.CharField(max_length=15)  # Teléfono de contacto

    def __str__(self):
        return self.nombre
