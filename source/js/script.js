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

document.addEventListener('DOMContentLoaded', () => {
  const filterPrice = document.querySelector('.filter__price');
  const filterDuration = document.querySelector('.filter__duration');
  const filterPeople = document.querySelector('.filter__people');
  const blogSliderWrapper = document.querySelector('.blog__slider');

  if (filterPrice) {
    noUiSlider.create(filterPrice, {
      start: [100, 400],
      connect: true,
      range: {
        'min': 100,
        'max': 400
      }
    });
  }

  if (filterDuration) {
    noUiSlider.create(filterDuration, {
      start: [3, 9],
      connect: true,
      range: {
        'min': 3,
        'max': 9
      }
    });
  }

  if (filterPeople) {
    noUiSlider.create(filterPeople, {
      start: [0, 50],
      connect: true,
      range: {
        'min': 0,
        'max': 50
      }
    });
  }

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
});


