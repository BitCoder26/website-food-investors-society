let currentSlide = 0;

function showSlide(index) {
    const slidesTrack = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;

    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    currentSlide = index;
    slidesTrack.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Attach arrows
document.querySelectorAll(".right-arrow").forEach(btn => {
    btn.addEventListener("click", nextSlide);
});
document.querySelectorAll(".left-arrow").forEach(btn => {
    btn.addEventListener("click", prevSlide);
});