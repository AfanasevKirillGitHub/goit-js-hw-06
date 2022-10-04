const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = Number(input.value);

  const newBox = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");

    box.style.width = 30 + 10 * i + "px";
    box.style.height = 30 + 10 * i + "px";
    box.style.marginTop = "5px";
    box.style.background = getRandomHexColor();

    newBox.push(box);
  }

  boxes.style.display = "flex";
  boxes.style.gap = "5px";
  boxes.append(...newBox);
}

function destroyBoxes() {
  const children = document.querySelectorAll("#boxes > div");
  for (const child of children) {
    child.remove();
    input.value = "";
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
