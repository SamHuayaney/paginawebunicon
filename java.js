let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 3000); // Cambiar cada 3 segundos
}

showSlides(); // Iniciar el slider

function showUrl() {
    var urlCuadro = document.getElementById('url-cuadro');
    var iframe = document.getElementById('url-iframe');
    iframe.src = "https://calculadora-carbono.climatehero.org/?source=GoogleKeywordsLatin&gad_source=1&gclid=Cj0KCQjwh7K1BhCZARIsAKOrVqE2NryrWivrM1fafV4aM8sFJdvR7hMtho-G-dyKFh95L1C84F2XArYaAqEPEALw_wcB";
    urlCuadro.style.display = 'block';
}

function hideUrl() {
    document.getElementById('url-cuadro').style.display = 'none';
}