from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms

class Registro(UserCreationForm):
    first_name = forms.CharField(max_length=20, help_text="Ingrese su nombre")
    last_name = forms.CharField(max_length=20, help_text="Ingrese su apellido")

    class Meta(UserCreationForm.Meta):
        fields = ("first_name", "last_name", "email", "username", "password1", "password2")
        model = User