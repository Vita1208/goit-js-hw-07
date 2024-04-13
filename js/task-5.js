function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');

changeColorBtn.addEventListener('click', function() {
  const randomHexColor = getRandomHexColor();
  body.style.backgroundColor = randomHexColor;
  colorSpan.textContent = randomHexColor;
});



