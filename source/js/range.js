import './api/nouislider.min.js';

const MIN_PRICE = 100;
const MAX_PRICE = 400;
const MIN_DURATION = 3;
const MAX_DURATION = 9;
const MIN_PEOPLE = 0;
const MAX_PEOPLE = 50;

const filter = document.querySelector('.filter');

let filterPrice;
let minPriceValue;
let maxPriceValue;
let filterDuration;
let minDurationValue;
let maxDurationValue;
let filterPeople;
let minPeopleValue;
let maxPeopleValue;

if (filter) {
  filterPrice = filter.querySelector('.filter__price');
  minPriceValue = filter.querySelector('#min-price');
  maxPriceValue = filter.querySelector('#max-price');
  filterDuration = filter.querySelector('.filter__duration');
  minDurationValue = filter.querySelector('#min-duration');
  maxDurationValue = filter.querySelector('#max-duration');
  filterPeople = filter.querySelector('.filter__people');
  minPeopleValue = filter.querySelector('#min-people');
  maxPeopleValue = filter.querySelector('#max-people');
}

function initSlider(element, min, max, elementMinValue, elementMaxValue, postfix = '') {
  noUiSlider.create(element, {
    start: [min, max],
    connect: true,
    step: 1,
    range: {
      'min': min,
      'max': max
    },
    format: {
      to: function (value) {
        return Math.round(value);
      },
      from: function (value) {
        return parseFloat(value);
      }
    }
  });

  element.noUiSlider.on('update', (values) => {
    elementMinValue.value = `${values[0]}${postfix}`
    elementMaxValue.value = `${values[1]}${postfix}`
  })
}



function initSliders() {
  if (filterPrice) {
    initSlider(filterPrice, MIN_PRICE, MAX_PRICE, minPriceValue, maxPriceValue, ' €')
  }

  if (filterDuration) {
    initSlider(filterDuration, MIN_DURATION, MAX_DURATION, minDurationValue, maxDurationValue, ' d')
  }

  if (filterPeople) {
    initSlider(filterPeople, MIN_PEOPLE, MAX_PEOPLE, minPeopleValue, maxPeopleValue)
  }
};

export default initSliders;
