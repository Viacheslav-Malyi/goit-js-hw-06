let counterValue = 0;
const valueEl = document.querySelector('#value');
const actions = document.querySelectorAll('#counter button');
actions[0].addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

actions[1].addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
