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

// REGISTRO
document.addEventListener('DOMContentLoaded', (event) => {
    const user = document.getElementById('id_username');
validarInput(user, "#error-user", "El usuario no puede estar vacío");
const email = document.getElementById('id_email');
validarInput(email, "#error-correoRegistro", "La contraseña no puede estar vacía");
});
function validarInput(input, label, texto){
    input.addEventListener('keyup', (event) => {
        if(input.value.length >= 1){
            input.classList.add("correct");
            input.classList.remove("incorrect");
            document.querySelector(label).innerHTML = "&nbsp;"
        }else{
            input.classList.remove("correct");
            input.classList.add("incorrect");
            document.querySelector(label).innerHTML = texto
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    let passwordRegistro = document.querySelector("#id_password1");
    let confirmarPasswordRegistro = document.querySelector("#id_password2");

    passwordRegistro.addEventListener("keyup", validarPasswordRegistro);
    confirmarPasswordRegistro.addEventListener("keyup", validarConfirmarPasswordRegistro);

    function validarPasswordRegistro() {
        let error1 = document.querySelector("#error-1-passwordRegistro");
        let error2 = document.querySelector("#error-2-passwordRegistro");
        let error3 = document.querySelector("#error-3-passwordRegistro");
        // Validación de longitud mínima
        if (passwordRegistro.value.length >= 7) {
            passwordRegistro.classList.add("correct");
            passwordRegistro.classList.remove("incorrect");
            error1.innerHTML = "&nbsp;";
        } else {
            passwordRegistro.classList.remove("correct");
            passwordRegistro.classList.add("incorrect");
            error1.innerHTML = "La contraseña debe tener mínimo 7 caracteres";
        }
        // Validación de al menos una mayúscula
        if (/[A-Z]/.test(passwordRegistro.value)) {
            error2.innerHTML = "&nbsp;";
        } else {
            error2.innerHTML = "La contraseña debe contener al menos una mayúscula";
        }
        // Validación de al menos un número
        if (/\d/.test(passwordRegistro.value)) {
            error3.innerHTML = "&nbsp;";
        } else {
            error3.innerHTML = "La contraseña debe contener al menos un número";
        }
        // Validar también la confirmación de contraseña cuando se cambia la contraseña principal
        validarConfirmarPasswordRegistro();
    }

    function validarConfirmarPasswordRegistro() {
        let errorConfirmar = document.querySelector("#error-confirmarPasswordRegistro");

        if (confirmarPasswordRegistro.value.length >= 1) {
            console.log(passwordRegistro.value+"  -  "+confirmarPasswordRegistro.value)
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
});
// NACIMIENTO
document.addEventListener('DOMContentLoaded', function() {
    let nacimientoRegistro = document.querySelector("#id_nacimiento");
    nacimientoRegistro.addEventListener("change", validarNacimientoRegistro);

    function validarNacimientoRegistro() {
        let nacimientoRegistro = document.querySelector("#id_nacimiento");
        let errorNacimiento = document.querySelector("#error-nacimientoRegistro");
        // Validar si se ha ingresado una fecha válida
        if (!nacimientoRegistro.value) {
            nacimientoRegistro.classList.remove("correct");
            nacimientoRegistro.classList.add("incorrect");
            errorNacimiento.innerHTML = "Por favor, ingrese su fecha de nacimiento";
            return;
        }
        let fechaNacimiento = new Date(nacimientoRegistro.value);
        let fechaActual = new Date();
        let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
        // Validar si la persona es mayor de 17 años
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
});
// FLECHAS
document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los campos de entrada y select del formulario
    const inputs = document.querySelectorAll('input, select');

    // Agregar listener para el evento keydown en cada campo
    inputs.forEach((input, index) => {
        input.addEventListener('keydown', function(event) {
            switch (event.key) {
                case 'ArrowUp':
                case 'ArrowDown':
                    event.preventDefault(); // Evitar comportamiento por defecto de las flechas

                    // Determinar la dirección de navegación
                    const direction = event.key === 'ArrowDown' ? 1 : -1;

                    // Calcular el índice del próximo campo de entrada o select en la misma columna
                    let nextIndex = index + direction;

                    // Asegurarse de que el índice esté dentro de los límites del array
                    if (nextIndex >= inputs.length) {
                        nextIndex = 0; // Volver al primer campo si se llega al final
                    } else if (nextIndex < 0) {
                        nextIndex = inputs.length - 1; // Ir al último campo si se va antes del primero
                    }

                    // Enfocar el próximo campo de entrada o select en la misma columna
                    inputs[nextIndex].focus();
                    break;
                case 'ArrowRight':
                    event.preventDefault(); // Evitar comportamiento por defecto de la flecha derecha

                    // Calcular el índice del próximo campo de entrada o select en la siguiente columna
                    let nextRightIndex = index + 1;

                    // Asegurarse de que el índice esté dentro de los límites del array y sea de la columna derecha
                    while (nextRightIndex < inputs.length) {
                        if (inputs[nextRightIndex].parentNode.classList.contains('registro-derecha')) {
                            inputs[nextRightIndex].focus();
                            break;
                        }
                        nextRightIndex++;
                    }

                    // Si no se encontró campo en la columna derecha, enfocar el primer campo de la izquierda
                    if (nextRightIndex >= inputs.length) {
                        for (let i = 0; i < inputs.length; i++) {
                            if (inputs[i].parentNode.classList.contains('registro-izquierda')) {
                                inputs[i].focus();
                                break;
                            }
                        }
                    }
                    break;
            }
        });
    });
});

// // getPaginas

// document.addEventListener("DOMContentLoaded", function() {
//     insertarGanadoresTop();
//     insertarGanadoresAnteriores();
// });

// // PAGINA GANADORES CON API

// //  TOP GANADORES

// async function obtenerDatos() {
//     try {
//         const response = await fetch('https://randomuser.me/api/?results=3');
//         const data = await response.json();
//         return data.results;
//     } catch (error) {
//         console.error('Error al obtener datos:', error);
//     }
// }

// async function insertarGanadoresTop() {
//     const ganadoresTop = document.querySelector('.ganadores-top');
//     ganadoresTop.innerHTML = '';
//     const resultados = await obtenerDatos();
//     const nombres = resultados.map(usuario => `${usuario.name.first} ${usuario.name.last}`);
//     const imagenes = resultados.map(usuario => usuario.picture.large);
//     const ganadoresHTML = `
//         <div class="contenedor-segundo-lugar">
//             <div class="contenedor-nombre-ganador-top-2">
//                 <h1>${nombres[0]}</h1>
//             </div>
//             <div class="contenedor-foto-ganador-top-2">
//                 <img src="${imagenes[0]}">
//             </div>
//             <div class="contenedor-lugar-2">
//                 <h1>2</h1>
//             </div>
//         </div>
//         <div class="contenedor-primer-lugar">
//             <div class="contenedor-nombre-ganador-top-1">
//                 <h1>${nombres[1]}</h1>
//             </div>
//             <div class="contenedor-foto-ganador-top-1">
//                 <img src="${imagenes[1]}">
//             </div>
//             <div class="contenedor-lugar-1">
//                 <h1>1</h1>
//             </div>
//         </div>
//         <div class="contenedor-tercer-lugar">
//             <div class="contenedor-nombre-ganador-top-3">
//                 <h1>${nombres[2]}</h1>
//             </div>
//             <div class="contenedor-foto-ganador-top-3">
//                 <img src="${imagenes[2]}">
//             </div>
//             <div class="contenedor-lugar-3">
//                 <h1>3</h1>
//             </div>
//         </div>`;
//     ganadoresTop.insertAdjacentHTML('beforeend', ganadoresHTML);
// }
// window.onload = insertarGanadoresTop;

// // ANTERIORES GANADORES

// async function insertarGanadoresAnteriores() {
//     const ganadoresAnterioresContainer = document.querySelector('.ganadores-anteriores');
//     ganadoresAnterioresContainer.innerHTML = '';
//     const resultados = await obtenerDatos();
//     for (let i = 0; i < 3; i++) {
//         const filaHTML = document.createElement('div');
//         filaHTML.classList.add('fila-ganadores');
//         for (let j = 0; j < 3; j++) {
//             const usuario = resultados[i * 3 + j];
//             const nombre = `${usuario.name.first} ${usuario.name.last}`;
//             const imagen = usuario.picture.large;

//             const ganadorHTML = `
//                 <div class="contenedor-ex-ganador">
//                     <div class="nombre-ex-ganador">
//                         <h1>${nombre}</h1>
//                     </div>
//                     <div class="foto-ex-ganador">
//                         <img src="${imagen}">
//                     </div>
//                 </div>`;
//             filaHTML.insertAdjacentHTML('beforeend', ganadorHTML);
//         }
//         ganadoresAnterioresContainer.appendChild(filaHTML);
//     }
// }

// window.onload = function() {
//     insertarGanadoresTop();
//     insertarGanadoresAnteriores();
// };