// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

//slider
const slides = document.querySelectorAll('.slide');
const container = document.querySelector('.slider-container');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
  slides.forEach((slide, index) => slide.classList.remove('active'));
  slides[currentIndex].classList.add('active');

  const slideWidth = slides[0].clientWidth + 20; // 20px margin
  const offset = currentIndex * slideWidth - (container.clientWidth - slideWidth)/2;
  container.style.transform = `translateX(${-offset}px)`;
}

prev.addEventListener('click', () => {
  currentIndex--;
  if(currentIndex < 0) currentIndex = slides.length - 1;
  updateCarousel();
});

next.addEventListener('click', () => {
  currentIndex++;
  if(currentIndex >= slides.length) currentIndex = 0;
  updateCarousel();
});

updateCarousel();


