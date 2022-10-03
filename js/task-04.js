const counterValue = document.querySelector("#value");
counterValue.value = 0;

const subtractBtn = document.querySelector('button[data-action="decrement"]');
const addBtn = document.querySelector('button[data-action="increment"]');

subtractBtn.addEventListener("click", increment);
addBtn.addEventListener("click", decrement);

function decrement() {
  counterValue.value += 1;
  counterValue.textContent = counterValue.value;
}

function increment() {
  counterValue.value -= 1;
  counterValue.textContent = counterValue.value;
}
