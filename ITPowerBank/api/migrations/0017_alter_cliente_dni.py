# Generated by Django 5.1.3 on 2024-12-08 21:58

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0016_alter_cliente_dni'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cliente',
            name='dni',
            field=models.CharField(default='12345678', max_length=9, validators=[django.core.validators.MinLengthValidator(7)]),
        ),
    ]
