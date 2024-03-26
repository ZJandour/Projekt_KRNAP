document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;
    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach(slide => slide.style.display = 'none');
        dots.forEach(dot => dot.classList.remove('active'));
        slides[n].style.display = 'block';
        dots[n].classList.add('active');
        currentSlide = n;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    function currentSlideClick(n) {
        showSlide(n);
    }

    document.querySelector('.arrow.left').addEventListener('click', prevSlide);
    document.querySelector('.arrow.right').addEventListener('click', nextSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlideClick(index));
    });

    // Automatické přepínání snímků každých 5 sekund
    setInterval(nextSlide, 5000);
});