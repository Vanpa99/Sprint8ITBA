# Generated by Django 5.1.3 on 2024-12-08 21:55

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_cliente_dni_alter_tarjeta_fecha_vencimiento'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tarjeta',
            name='fecha_vencimiento',
            field=models.DateField(default=api.models.get_default_fecha_vencimiento),
        ),
    ]