const accordionButtons = document.querySelectorAll(".accordion");

// Accordion

if (accordionButtons) {
  function showActiveAccordion (evt, elements) {
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

// Filter
document.addEventListener('DOMContentLoaded',() => {
  const filterPrice = document.querySelector('.tours-filter__price');
  const filterDuration = document.querySelector('.tours-filter__duration');

  if (filterPrice && filterDuration) {
    noUiSlider.create(filterPrice, {
      start: [100, 400],
      connect: true,
      range: {
        'min': 100,
        'max': 400
      }
    });

    noUiSlider.create(filterDuration, {
      start: [3, 9],
      connect: true,
      range: {
        'min': 3,
        'max': 9
      }
    });
  }
});
