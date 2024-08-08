document.addEventListener('DOMContentLoaded', function() {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var caption = document.getElementById('caption');

    // Abrir lightbox
    document.querySelectorAll('.zoomable').forEach(function(img) {
        img.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
            caption.innerHTML = this.nextElementSibling.innerHTML;
        });
    });

    // Cerrar lightbox
    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox || event.target === document.querySelector('.close')) {
            lightbox.style.display = 'none';
        }
    });
});
