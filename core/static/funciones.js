// MODAL MI CUENTA 
function showModalCuenta(){
    let modal = document.querySelector("#modal-cuenta")
    modal.classList.toggle("show")
}

// MODAL DIVISA
function showModalDivisa(){
    let modal = document.querySelector("#modal-divisa")
    modal.classList.toggle("show")
}

// API MONEDAS

fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then(response => response.json())
    .then(data => {
        const coinSelect = document.getElementById('coinSelect');
        const desiredCoins = ["EUR", "CLP", "ARS", "COP", "MXN"];

        Object.keys(data.rates).forEach(currency => {
            if (desiredCoins.includes(currency)) {
                const option = document.createElement('option');
                option.value = currency;
                const currencyName = getCurrencyName(currency);
                option.text = `${currency} | ${currencyName.padStart(15, ' ')}`;
                if (currency === 'CLP') {
                    option.selected = true;
                }
                coinSelect.appendChild(option);
            }
        });
    })
    .catch(error => console.error('Error al obtener datos de monedas:', error));

    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById('guardar').addEventListener('click', function() {
            const coinSelect = document.getElementById('coinSelect');
            const currencyButton = document.getElementById('currencyButton');
            const selectedOption = coinSelect.value;
            const selectedOptionName = getCurrencyName(selectedOption);
            currencyButton.textContent = `${selectedOption} | ${selectedOptionName}`;
            showModalDivisa();
        });
    });

function getCurrencyName(code) {
    switch (code) {
        case 'EUR':
            return 'Euro';
        case 'CLP':
            return 'Peso Chileno';
        case 'ARS':
            return 'Peso Argentino';
        case 'COP':
            return 'Peso Colombiano';
        case 'MXN':
            return 'Peso Mexicano';
        default:
            return '';
    }
}

// VALIDAR INICIAR SESION

function validarUsuario() {
    let user = document.querySelector("#user");
    if(user.value.length >= 1){
        user.classList.add("correct");
        user.classList.remove("incorrect");
        document.querySelector("#error-user").innerHTML = "&nbsp;"
    }else{
        user.classList.remove("correct");
        user.classList.add("incorrect");
        document.querySelector("#error-user").innerHTML = "El usuario no puede estar vacío"
    }

}
function validarPassword() {
    let password = document.querySelector("#password");
    if(password.value.length >= 1){
        password.classList.add("correct");
        password.classList.remove("incorrect");
        document.querySelector("#error-password").innerHTML = "&nbsp;"
    }else{
        password.classList.remove("correct");
        password.classList.add("incorrect");
        document.querySelector("#error-password").innerHTML = "La contraseña no puede estar vacía"
    }
}
// VALIDAR REGISTRO

// USUARIO
function validarUsuarioRegistro() {
    let usuarioRegistro = document.querySelector("#usuarioRegistro");
    if(usuarioRegistro.value.length >= 1){
        usuarioRegistro.classList.add("correct");
        usuarioRegistro.classList.remove("incorrect");
        document.querySelector("#error-usuarioRegistro").innerHTML = "&nbsp;"
    }else{
        usuarioRegistro.classList.remove("correct");
        usuarioRegistro.classList.add("incorrect");
        document.querySelector("#error-usuarioRegistro").innerHTML = "El usuario no puede estar vacío"
    }

}
// CORREO
function validarCorreoRegistro() {
    let correoRegistro = document.querySelector("#correoRegistro");
    if(correoRegistro.value.length >= 1){
        correoRegistro.classList.add("correct");
        correoRegistro.classList.remove("incorrect");
        document.querySelector("#error-correoRegistro").innerHTML = "&nbsp;"
    }else{
        correoRegistro.classList.remove("correct");
        correoRegistro.classList.add("incorrect");
        document.querySelector("#error-correoRegistro").innerHTML = "El correo no puede estar vacío"
    }

}
// CONTRASEÑA
function validarPasswordRegistro() {
    let passwordRegistro = document.querySelector("#passwordRegistro");
    let error1 = document.querySelector("#error-1-passwordRegistro");
    let error2 = document.querySelector("#error-2-passwordRegistro");
    let error3 = document.querySelector("#error-3-passwordRegistro");
    if (passwordRegistro.value.length >= 7) {
        passwordRegistro.classList.add("correct");
        passwordRegistro.classList.remove("incorrect");
        error1.innerHTML = "&nbsp;";
    } else {
        passwordRegistro.classList.remove("correct");
        passwordRegistro.classList.add("incorrect");
        error1.innerHTML = "La contraseña debe tener mínimo 7 caracteres";
    }
    if (/[A-Z]/.test(passwordRegistro.value)) {
        error2.innerHTML = "&nbsp;";
    } else {
        error2.innerHTML = "La contraseña debe contener al menos una mayúscula";
    }
    if (/\d/.test(passwordRegistro.value)) {
        error3.innerHTML = "&nbsp;";
    } else {
        error3.innerHTML = "La contraseña debe contener al menos un número";
    }
}
window.addEventListener("DOMContentLoaded", function() {
    let errorDiv2 = document.createElement("div");
    errorDiv2.id = "error-2-passwordRegistro";
    document.body.appendChild(errorDiv2);

    let errorDiv3 = document.createElement("div");
    errorDiv3.id = "error-3-passwordRegistro";
    document.body.appendChild(errorDiv3);
});
// CONFIRMAR CONTRASEÑA
function validarConfirmarPasswordRegistro() {
    let confirmarPasswordRegistro = document.querySelector("#confirmarPasswordRegistro");
    let passwordRegistro = document.querySelector("#passwordRegistro");
    let errorConfirmar = document.querySelector("#error-confirmarPasswordRegistro");

    if (confirmarPasswordRegistro.value.length >= 1) {
        if (confirmarPasswordRegistro.value === passwordRegistro.value) {
            confirmarPasswordRegistro.classList.add("correct");
            confirmarPasswordRegistro.classList.remove("incorrect");
            errorConfirmar.innerHTML = "&nbsp;";
        } else {
            confirmarPasswordRegistro.classList.remove("correct");
            confirmarPasswordRegistro.classList.add("incorrect");
            errorConfirmar.innerHTML = "Confirmar contraseña tiene que ser igual a la contraseña";
        }
    } else {
        confirmarPasswordRegistro.classList.remove("correct");
        confirmarPasswordRegistro.classList.add("incorrect");
        errorConfirmar.innerHTML = "Por favor, confirma tu contraseña";
    }
}
// NACIMIENTO
function validarNacimientoRegistro() {
    let nacimientoRegistro = document.querySelector("#nacimientoRegistro");
    let errorNacimiento = document.querySelector("#error-nacimientoRegistro");
    let fechaNacimiento = new Date(nacimientoRegistro.value);
    let fechaActual = new Date();
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    if (edad < 17) {
        nacimientoRegistro.classList.remove("correct");
        nacimientoRegistro.classList.add("incorrect");
        errorNacimiento.innerHTML = "Debe ser mayor de 17 años";
    } else {
        nacimientoRegistro.classList.add("correct");
        nacimientoRegistro.classList.remove("incorrect");
        errorNacimiento.innerHTML = "&nbsp;";
    }
}

// getPaginas

document.addEventListener("DOMContentLoaded", function() {
    insertarGanadoresTop();
    insertarGanadoresAnteriores();
});

// PAGINA GANADORES CON API

//  TOP GANADORES

async function obtenerDatos() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=3');
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

async function insertarGanadoresTop() {
    const ganadoresTop = document.querySelector('.ganadores-top');
    ganadoresTop.innerHTML = '';
    const resultados = await obtenerDatos();
    const nombres = resultados.map(usuario => `${usuario.name.first} ${usuario.name.last}`);
    const imagenes = resultados.map(usuario => usuario.picture.large);
    const ganadoresHTML = `
        <div class="contenedor-segundo-lugar">
            <div class="contenedor-nombre-ganador-top-2">
                <h1>${nombres[0]}</h1>
            </div>
            <div class="contenedor-foto-ganador-top-2">
                <img src="${imagenes[0]}">
            </div>
            <div class="contenedor-lugar-2">
                <h1>2</h1>
            </div>
        </div>
        <div class="contenedor-primer-lugar">
            <div class="contenedor-nombre-ganador-top-1">
                <h1>${nombres[1]}</h1>
            </div>
            <div class="contenedor-foto-ganador-top-1">
                <img src="${imagenes[1]}">
            </div>
            <div class="contenedor-lugar-1">
                <h1>1</h1>
            </div>
        </div>
        <div class="contenedor-tercer-lugar">
            <div class="contenedor-nombre-ganador-top-3">
                <h1>${nombres[2]}</h1>
            </div>
            <div class="contenedor-foto-ganador-top-3">
                <img src="${imagenes[2]}">
            </div>
            <div class="contenedor-lugar-3">
                <h1>3</h1>
            </div>
        </div>`;
    ganadoresTop.insertAdjacentHTML('beforeend', ganadoresHTML);
}
window.onload = insertarGanadoresTop;

// ANTERIORES GANADORES

async function insertarGanadoresAnteriores() {
    const ganadoresAnterioresContainer = document.querySelector('.ganadores-anteriores');
    ganadoresAnterioresContainer.innerHTML = '';
    const resultados = await obtenerDatos();
    for (let i = 0; i < 3; i++) {
        const filaHTML = document.createElement('div');
        filaHTML.classList.add('fila-ganadores');
        for (let j = 0; j < 3; j++) {
            const usuario = resultados[i * 3 + j];
            const nombre = `${usuario.name.first} ${usuario.name.last}`;
            const imagen = usuario.picture.large;

            const ganadorHTML = `
                <div class="contenedor-ex-ganador">
                    <div class="nombre-ex-ganador">
                        <h1>${nombre}</h1>
                    </div>
                    <div class="foto-ex-ganador">
                        <img src="${imagen}">
                    </div>
                </div>`;
            filaHTML.insertAdjacentHTML('beforeend', ganadorHTML);
        }
        ganadoresAnterioresContainer.appendChild(filaHTML);
    }
}

window.onload = function() {
    insertarGanadoresTop();
    insertarGanadoresAnteriores();
};