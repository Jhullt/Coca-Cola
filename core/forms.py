from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms

class Registro(UserCreationForm):
    nacimiento = forms.DateField(label="Fecha de Nacimiento", widget=forms.DateInput(attrs={'type': 'date'}))
    class Meta(UserCreationForm.Meta):
        fields = ("email", "username", "password1", "password2", "nacimiento")
        model = User