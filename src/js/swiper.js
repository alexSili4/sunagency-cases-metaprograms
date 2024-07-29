import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const reviewsSlider = new Swiper('.js-pages-slider', {
  modules: [Autoplay],
  direction: 'horizontal',
  centeredSlides: true,
  loop: true,
  spaceBetween: 13,
  slidesPerView: 'auto',
  speed: 3000,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      spaceBetween: 48,
    },
    4152: {
      autoplay: false,
      allowTouchMove: false,
      centeredSlides: false,
    },
  },
});
