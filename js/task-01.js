const categoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach((category) => {
  const allCategoriesEl = [...category.children];
  allCategoriesEl.forEach((element) => {
    if (element.localName === "h2") {
      console.log(`Category: ${element.textContent}`);
    }
  });
  allCategoriesEl.forEach((element) => {
    if (element.localName === "ul") {
      console.log(`Elements: ${element.children.length}`);
    }
  });
});

// Предложение от ментора

// const list = document.querySelector("#categories");
// const items = list.querySelectorAll(".item");
// console.log(`В списке ${items.length} категории:`);
// items.forEach((node) => {
//   const h2 = node.querySelector("h2");
//   const nodeItems = node.querySelectorAll("li");
//   console.log(
//     ` - категория: ${h2.textContent} (количество элементов: ${nodeItems.length})`
//   );
// });
