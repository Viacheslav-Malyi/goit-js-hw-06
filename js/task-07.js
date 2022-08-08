const inputEl = document.querySelector('#font-size-control');
inputEl.addEventListener('input', fontChange);
let text = document.querySelector('#text');

function fontChange(event) {
  console.log((text.style.fontSize = event.currentTarget.value + 'px'));
  text.style.fontSize = event.currentTarget.value + 'px';
}
