const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onValidationInput);
function onValidationInput(event) {
  console.log('blur');
  console.log(event.currentTarget.value.length);
  console.dir(event.currentTarget.dataset.length);
  console.log(
    Number(event.currentTarget.value.length) === Number(event.currentTarget.dataset.length)
  );
  if (Number(event.currentTarget.value.length) !== Number(event.currentTarget.dataset.length)) {
    inputEl.classList.add('invalid');
  } else inputEl.classList.remove('invalid'), inputEl.classList.add('valid');
}
