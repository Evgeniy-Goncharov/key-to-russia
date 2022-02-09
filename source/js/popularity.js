import {filter} from "./range.js";

if (filter) {
  const filterPopularity = filter.querySelector('.filter__popularity');
  const itemInputs = filterPopularity.querySelectorAll('input');

  function fillPopularityItems() {
    for (let itemInput of itemInputs) {
      itemInput.classList.remove('checked');
    }

    for (let itemInput of itemInputs) {
      if (!itemInput.checked) {
        itemInput.classList.add('checked');
      } else {
        break
      };
    }
  }

  fillPopularityItems();

  filterPopularity.addEventListener('change', fillPopularityItems);
}
