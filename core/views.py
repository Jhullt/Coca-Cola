from django.shortcuts import render, redirect
from .models import * 
from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from django.contrib.auth.views import logout_then_login

from .forms import * 
# LOGIN
def iniciar_sesion(request):
    username = request.POST["usuario"]
    password = request.POST["password"]
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return redirect(to="home")
    else:
        return redirect(to="home")
# LOGOUT 
def logout(request):
    return logout_then_login(request, login_url="home")
# HEADER
def carrito(request):
     return render(request, "carrito.html")
# BARRA NAV
def home(request):
    context = {}
    if request.session.get("total", None) == None:
        request.session["total"] = 0
    print(request.session.get("modal", None))
    if request.session.get("modal", None) == True:
        context["modal"]= True
        del(request.session["modal"])
    context["productos"] = Producto.objects.all()
    context["carrusel"] = Carrusel.objects.all()

    return render(request, "index.html", context)
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
    
    referer = request.META.get('HTTP_REFERER').strip('/').split('/')[-1]
    carrito = request.session.get("carrito", [])
    total = 0
    print(referer)
    for item in carrito:
        if item["id"] == id:
            if  item["cantidad"] > 1:
                item["cantidad"] -= 1
                item["subtotal"] = item["cantidad"] * item["precio"]
                break
            else:   
                print(f"ID: {id}")
                carrito.remove(item)
                break
    for item in carrito:
        total += item["subtotal"]
    request.session["total"] = total
    request.session["carrito"] = carrito
    return redirect(to= ("home" if ":" in referer else referer))

def addToCar(request, id):
    carrito = request.session.get("carrito", [])
    producto = Producto.objects.get(id=id)
    total = 0
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
    for item in carrito:
        total += item["subtotal"]
    request.session["total"] = total
    request.session["carrito"] = carrito
    return redirect(to="home")

def limpiarCarrito(request):
    referer = request.META.get('HTTP_REFERER').strip('/').split('/')[-1]
    request.session["carrito"] = []
    request.session["total"] = 0
    return redirect(to= ("home" if ":" in referer else referer))

#REGISTRO
def registrarse(request):
    if request.method == "POST":
        registro = Registro(request.POST)
        if registro.is_valid():
            registro.save()
            request.session['modal'] = True
            return redirect(to="home")
    else:
        registro = Registro()
    return render(request, 'registrarse.html', {'form':registro})