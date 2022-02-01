import './api/swiper.min.js';

const blogSliderWrapper = document.querySelector('.blog__slider');

if (blogSliderWrapper) {
  const blogSwiper = new Swiper(blogSliderWrapper, {
    direction: 'horizontal',
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    breakpoints: {
      0: {
        pagination: {
          el: '.swiper-pagination',
        },
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
      },
      1400: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  });
}
