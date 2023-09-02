const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

slider.style.transform = 'scale(0.4) translateX(-800px)';
slider.style.overflow = 'visible';

const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');

console.log(btnRight);
let curSlide = 0;
const maxSlide = slides.length - 1;

const goToSlide = surSlide => {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - curSlide) * 100}%)`;
  });
};

goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide) curSlide = 0;
  else curSlide++;

  goToSlide(curSlide);
};

const previousSlide = function () {
  if (curSlide === 0) curSlide = maxSlide;
  else curSlide--;

  goToSlide(curSlide);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', previousSlide);
