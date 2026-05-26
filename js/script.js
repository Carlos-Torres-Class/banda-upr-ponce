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
let slideIndex = 1;

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let captionText = document.getElementById("caption");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    captionText.innerHTML = slides[slideIndex - 1].querySelector("img").alt;
}