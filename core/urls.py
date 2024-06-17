from .views import *
from django.urls import path
from core.views import *
from django.contrib.auth.views import LoginView

urlpatterns = [
    # BARRA NAV 
    path('', home, name = "home"),
    path('retornables', retornables, name = "retornables"),
    path('bebidas', bebidas, name = "bebidas"),
    path('aguaJugos', aguaJugos, name = "aguaJugos"),
    path('cervezas', cervezas, name = "cervezas"),
    path('licores', licores, name = "licores"),
    path('vinos', vinos, name = "vinos"),
    path('espumantes', espumantes, name = "espumantes"),
    path('merchandising', merchandising, name = "merchandising"),
    # FOOTER
    path('miPerfil', miPerfil, name = "miPerfil"),
    path('basesLegales', basesLegales, name = "basesLegales"),
    path('condiciones', condiciones, name = "condiciones"),
    path('cookies', cookies, name = "cookies"),
    path('ganadores', ganadores, name = "ganadores"),
    path('limite', limite, name = "limite"),
    path('misPedidos', misPedidos, name = "misPedidos"),
    path('politica', politica, name = "politica"),
    path('repetirPedidos', repetirPedidos, name = "repetirPedidos"),
    path('terminosCondiciones', terminosCondiciones, name = "terminosCondiciones"),
    # REGISTRARSE
    path('registrarse', registrarse, name = "registrarse"),
    # CARRITO
    path('carrito', carrito, name = "carrito"),
    path('addToCar/<id>', addToCar, name = "addToCar"),
    path('delToCar/<id>', delToCar, name = "delToCar"),
]
