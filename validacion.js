
// Obtener los elementos de entrada y el botón
var input1 = document.getElementById("nombre_input");
var input2 = document.getElementById("email_input");
var input3 = document.getElementById("asunto_input");
var input4 = document.getElementById("mensaje_input");
var boton = document.getElementById("boton_contacto");

// Agregar event listener a los campos de entrada
input1.addEventListener("input", verificarInputs);
input2.addEventListener("input", verificarInputs);
input3.addEventListener("input", verificarInputs);
input4.addEventListener("input", verificarInputs);


// Función para verificar si los tres campos están llenos
function verificarInputs() {
    if (input1.value.trim() !== "" && input2.value.trim() !== "" && input3.value.trim() !== "" && input4.value.trim() !== "") {
        boton.disabled = false; 
        boton.style.backgroundColor = "#2A7AE4";
    } else {
        boton.disabled = true;
    }
}

function validarCampos() {
    let name = document.getElementById("nombre_input").value.trim();
    if (!name) {
        alert("El campo nombre esta vacio, Por favor, Ingrese su nombre.");
        event.preventDefault();
    } else if (name.length > 50) {
        alert("Error: El campo Nombre debe contener máximo 50 caracteres.");
        event.preventDefault();
    }

    let email = document.getElementById("email_input").value.trim();
    if (!email) {
        alert("El campo Email esta vacio, Por favor, Ingrese su Email.");
        event.preventDefault();
    }

    let asunto = document.getElementById("asunto_input").value.trim();
    if (!asunto) {
        alert("El campo Asunto esta vacio, Por favor, Ingrese su mensaje.");
        event.preventDefault();
    } else if (asunto.length > 50) {
        alert("Error: El campo Asunto debe contener máximo 50 caracteres.");
        event.preventDefault();
    }

    let mensaje = document.getElementById("mensaje_input").value.trim();
    if (!mensaje) {
        alert("El campo Mensaje esta vacio, Por favor, Ingrese su Mensaje.");
        event.preventDefault();
    } else if (mensaje.length > 300) {
        alert("Error: El campo Mensaje debe contener máximo 300 caracteres.");
        event.preventDefault();
    }
}
