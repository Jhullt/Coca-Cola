from django.db import models

class Producto(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=255)
    precio = models.IntegerField()
    stock = models.IntegerField()
    imagen = models.CharField(max_length=255)
    id_pagina = models.IntegerField()
    def __str__(self):
        return f"{self.nombre} {self.id_pagina}"

class Carrusel(models.Model):
    id = models.AutoField(primary_key=True)
    imagen = models.CharField(max_length=255)