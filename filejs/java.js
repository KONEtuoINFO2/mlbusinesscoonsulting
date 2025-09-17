// slider
const SliderContainer = document.querySelector('.slider-container');
const Slides = document.querySelectorAll('.slide');
let currentSlide = 0;

if (SliderContainer && Slides.length > 0) {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % Slides.length;
    SliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  }, 5000);
} else {
  console.error("Les images ne sont pas disponibles");
}