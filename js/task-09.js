const changeColorBtn = document.querySelector(".change-color");
const currentColorPage = document.querySelector(".color");
const page = document.querySelector("body");

changeColorBtn.addEventListener("click", changeColor);

function changeColor() {
  page.style.backgroundColor = getRandomHexColor();
  currentColorPage.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
