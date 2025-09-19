// Sélectionne tous les sliders
document.addEventListener("DOMContentLoaded",()=>{
  const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
  const sliderContainer = slider.querySelector('.slider-container');
  const slides = slider.querySelectorAll('.slide');
  let currentSlide = 0;

  if (sliderContainer && slides.length > 0) {
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }, 5000);
  } else {
    console.error("Les images ne sont pas disponibles dans ce slider");
  }
});

})
