let slideIndex = 0;

function openSlideshow() {
    document.getElementById("slideshowModal").style.display = "flex";
    showSlide(slideIndex);
}

function closeSlideshow() {
    document.getElementById("slideshowModal").style.display = "none";
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}
