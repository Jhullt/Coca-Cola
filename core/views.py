from django.shortcuts import render, redirect
from .models import * 
from .forms import * 
# HEADER
def carrito(request):
     return render(request, "carrito.html")
# BARRA NAV
def home(request):
    productos = Producto.objects.all()
    carrusel = Carrusel.objects.all()
    return render(request, "index.html", {'productos':productos, 'carrusel':carrusel})
def retornables(request):
    return render(request, "barra-nav-html/retornables.html")
def bebidas(request):
    return render(request, "barra-nav-html/bebidas.html")
def aguaJugos(request):
    return render(request, "barra-nav-html/agua-jugos.html")
def cervezas(request):
    return render(request, "barra-nav-html/cervezas.html")
def licores(request):
    return render(request, "barra-nav-html/licores.html")
def vinos(request):
    return render(request, "barra-nav-html/vinos.html")
def espumantes(request):
    return render(request, "barra-nav-html/espumantes.html")
def merchandising(request):
    return render(request, "barra-nav-html/merchandising.html")
# FOOTER
def miPerfil(request):
    return render(request, "footer-html/mi-perfil.html")
def basesLegales(request):
    return render(request, "footer-html/bases-legales.html")
def condiciones(request):
    return render(request, "footer-html/condiciones.html")
def cookies(request):
    return render(request, "footer-html/cookies.html")
def ganadores(request):
    return render(request, "footer-html/ganadores.html")
def limite(request):
    return render(request, "footer-html/limite.html")
def misPedidos(request):
    return render(request, "footer-html/mis-pedidos.html")
def politica(request):
    return render(request, "footer-html/politica.html")
def repetirPedidos(request):
    return render(request, "footer-html/repetir-pedidos.html")
def terminosCondiciones(request):
    return render(request, "footer-html/terminos-condiciones.html")
# CARRITO
def delToCar(request, id):
    carrito = request.session.get("carrito", [])
    for item in carrito:
        if item["id"] == id:
            if  item["cantidad"] > 1:
                item["cantidad"] -= 1
                item["subtotal"] = item["cantidad"] * item["precio"]
                break
    else:   
        carrito.remove(item)
    request.session["carrito"] = carrito
    return redirect(to="carrito")
def addToCar(request, id):
    carrito = request.session.get("carrito", [])
    producto = Producto.objects.get(id=id)
    for item in carrito:
        if item["id"] == id:
            item["cantidad"] += 1
            item["subtotal"] = item["cantidad"] * item["precio"]
            break
    else:   
        carrito.append({
            "id":id, 
            "nombre":producto.nombre,
            "imagen":producto.imagen,
            "precio":producto.precio,
            "cantidad":1,
            "subtotal":producto.precio})
    print(id)
    request.session["carrito"] = carrito
    return redirect(to="home")
#REGISTRO
def registrarse(request):
    if request.method == "POST":
        registro = Registro(request.POST)
        if registro.is_valid():
            registro.save()
            return redirect(to="login")
    else:
        registro = Registro()
    return render(request, 'registrarse.html', {'form':registro})