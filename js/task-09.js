function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColor = document.querySelector('.change-color');
changeColor.addEventListener('click', clickToChangeColor);
let spanColor = document.querySelector('.color');

function clickToChangeColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
}
