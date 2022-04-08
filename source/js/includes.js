const moreItems = document.querySelectorAll('.includes__item--more');

if (moreItems) {
  for (let item of moreItems) {
    const button = item.querySelector('.includes__button');

    button.addEventListener('click', (evt) => {
      evt.stopPropagation();
      item.classList.toggle('popup-open');
    });
  };

  document.addEventListener('click', () => {
    for (let item of moreItems) {
      item.classList.remove('popup-open');
    }
  })
}
