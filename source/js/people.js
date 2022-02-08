const selectPeople = document.querySelector('.select-people');
const MIN_PEOPLE_COUNT = 0;
const MAX_PEOPLE_COUNT = 50;

let peopleCounts = {
  adultCount: 3,
  childsCount: 3
}

let selectValue = `${peopleCounts.adultCount} adults | ${peopleCounts.childsCount} childs`;

if (selectPeople) {
  const select = selectPeople.querySelector('#number-of-people');
  const popUp = selectPeople.querySelector('.select-people__popup');
  const counterAdult = selectPeople.querySelector('.select-people__counter--adult');
  const counterChilds = selectPeople.querySelector('.select-people__counter--childs');

  function formatValue(value) {
    if (String(value).length < 2) {
      return '0' + value;
    }

    return value;
  }

  function closePopup() {
    selectPeople.classList.remove('select-people--opened');
  }

  function togglePopup() {
    selectPeople.classList.toggle('select-people--opened');
  }

  function onClickWindow(evt) {
    if (evt.target !== select && !popUp.contains(evt.target)) {
      closePopup();
    } else if (evt.target === select) {
      togglePopup();
    }
  }

  function initCounter(counter, count) {
    const increaseButton = counter.querySelector('.select-people__button--plus');
    const decreaseButton = counter.querySelector('.select-people__button--minus');
    const valueElement = counter.querySelector('.select-people__value');

    select.value = selectValue;
    valueElement.textContent = formatValue(peopleCounts[count]);

    function increaseValue() {
      if (peopleCounts[count] < MAX_PEOPLE_COUNT) {
        peopleCounts[count]++;
        valueElement.textContent = formatValue(peopleCounts[count]);
        select.value = `${peopleCounts.adultCount} adults | ${peopleCounts.childsCount} childs`;
      }
    }

    function decreaseValue() {
      if (count > MIN_PEOPLE_COUNT) {
        peopleCounts[count]--;
        valueElement.textContent = formatValue(peopleCounts[count]);
        select.value = `${peopleCounts.adultCount} adults | ${peopleCounts.childsCount} childs`;
      }
    }

    increaseButton.addEventListener('click', increaseValue);
    decreaseButton.addEventListener('click', decreaseValue);
  }

  initCounter(counterAdult, 'adultCount');
  initCounter(counterChilds, 'childsCount');

  document.addEventListener('click', onClickWindow);
}
