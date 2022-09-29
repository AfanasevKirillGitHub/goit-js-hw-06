const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.map((element) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = element;
  list.append(itemEl);
});
