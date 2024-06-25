from django.db import models

class Producto(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=40)
    precio = models.IntegerField()
    stock = models.IntegerField()
    imagen = models.CharField(max_length=255)
    def __str__(self):
        return self.nombre

class Carrusel(models.Model):
    id = models.AutoField(primary_key=True)
    imagen = models.CharField(max_length=255)