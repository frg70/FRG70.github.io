document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links in the navigation menu
    const navLinks = document.querySelectorAll("header nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth"
        });
    }
});
// JavaScript to handle the hamburger menu button click and toggle lateral nav visibility
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menuBtn");
    const lateralNav = document.getElementById("lateralNav");

    menuBtn.addEventListener("click", function () {
        lateralNav.classList.toggle("show"); // Toggle class to show/hide lateral nav
    });
});
// JavaScript for the carousel
document.addEventListener("DOMContentLoaded", function () {
    const mySwiper = new Swiper('.swiper-container', {
        loop: true, // Enable loop mode to create an infinite carousel
        speed: 1000, // Set the speed of the carousel transition (in ms)
        autoplay: {
            delay: 3000, // Set the delay between slides (in ms)
            disableOnInteraction: false, // Allow the carousel to continue autoplaying even when users interact with it
        },
        pagination: {
            el: '.swiper-pagination', // Add pagination bullets to the carousel
            clickable: true, // Enable navigation by clicking on the bullets
        },
    });
});
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}