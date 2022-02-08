import './api/choices.min.js';

const customSelects = document.querySelectorAll('.select-custom');

if (customSelects) {
  customSelects.forEach((customSelect) => {

    const choices = new Choices(customSelect, {
      searchEnabled: false,
      itemSelectText: '',
    });
  })
}
