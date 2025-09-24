const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let current = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

// Next slide
function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

// Previous slide
function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

// Buttons
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

// Initialize first slide
showSlide(current);
