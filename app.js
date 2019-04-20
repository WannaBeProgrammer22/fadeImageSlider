let slideIndex = 0;

showSlides(slideIndex);

function showSlides(index) {
    let slides = document.querySelectorAll('.slide'),
        dots = document.querySelectorAll('.dot-navigation');

    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].classList.remove('active-dot');
    }

    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active-dot');
}

document.querySelector('#arrow-prev').addEventListener('click', function () {
    showSlides(--slideIndex);
});

document.querySelector('#arrow-next').addEventListener('click', function () {
    showSlides(++slideIndex);
});

document.querySelectorAll(".dot-navigation").forEach(function (dot, index) {
    dot.addEventListener('click', function () {
        showSlides(slideIndex = index);
    });
});

let startSlide = setInterval(function () {
    showSlides(++slideIndex);
}, 3000);

document.getElementById('slider-container').addEventListener('mouseleave', function () {
    clearInterval(startSlide);
    startSlide = setInterval(function () {
        showSlides(++slideIndex);
    }, 3000)
})

document.getElementById('slider-container').addEventListener('mouseenter', function () {
    clearInterval(startSlide);
});