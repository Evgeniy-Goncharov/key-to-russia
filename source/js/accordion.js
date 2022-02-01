const accordionButtons = document.querySelectorAll(".accordion");

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
