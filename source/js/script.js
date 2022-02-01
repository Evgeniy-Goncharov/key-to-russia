import './api/swiper.min.js';
import './range.js';


const accordionButtons = document.querySelectorAll(".accordion");

// Accordion

if (accordionButtons) {
  function showActiveAccordion(evt, elements) {
    for (let element of elements) {
      const panel = element.nextElementSibling;

      if (element === evt.target) {
        element.classList.toggle('active');
        element.classList.contains('active') ? panel.style.height = panel.scrollHeight + 'px' : panel.style.height = '0';
      } else {
        element.classList.remove('active');
        panel.style.height = '0';
      }
    }
  }

  for (let button of accordionButtons) {
    button.addEventListener("click", (evt) => showActiveAccordion(evt, accordionButtons));
    button.nextElementSibling.style.cssText = `
      height: 0;
      transition: 0.2s ease-out;
    `;
  };
}

// Filter, Swiper
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


