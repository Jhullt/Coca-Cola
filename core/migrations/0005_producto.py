# Generated by Django 5.0.6 on 2024-06-28 17:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_delete_producto'),
    ]

    operations = [
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=40)),
                ('precio', models.IntegerField()),
                ('stock', models.IntegerField()),
                ('imagen', models.CharField(max_length=255)),
                ('id_pagina', models.IntegerField()),
            ],
        ),
    ]
