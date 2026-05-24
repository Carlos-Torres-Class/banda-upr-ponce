function validarFormulario() {

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let instrumento = document.getElementById("instrumento").value;

    if (nombre === "" || email === "" || instrumento === "") {

        alert("Por favor complete todos los campos.");
        return false;
    }

    alert("Formulario enviado correctamente.");
    return true;
}