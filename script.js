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

  const slideStyle = getComputedStyle(slides[0]);
  const slideWidth = slides[0].offsetWidth + parseInt(slideStyle.marginLeft) + parseInt(slideStyle.marginRight);
  const containerWidth = container.offsetWidth;

  // centriranje aktivnog slajda
  const offset = currentIndex * slideWidth - (containerWidth - slideWidth) / 2;
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

//touch events za listanje slika
let startX = 0;
let endX = 0;

container.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

container.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

container.addEventListener('touchend', () => {
  let diff = startX - endX;
  if (diff > 50) {
    // swipe lijevo → sljedeći slide
    currentIndex++;
    if(currentIndex >= slides.length) currentIndex = slides.length - 1;
    updateCarousel();
  } else if (diff < -50) {
    // swipe desno → prethodni slide
    currentIndex--;
    if(currentIndex < 0) currentIndex = 0;
    updateCarousel();
  }
});