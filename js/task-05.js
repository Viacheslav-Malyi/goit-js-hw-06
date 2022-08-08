const inputName = document.querySelector('#name-input');
inputName.addEventListener('input', onInputChadge);
let outputName = document.querySelector('#name-output');
function onInputChadge(event) {
  console.log(event.currentTarget.value);
  console.log(outputName.textContent);
  if (event.currentTarget.value === '') {
    outputName.textContent = 'Anonymous';
  } else outputName.textContent = event.currentTarget.value;
}
