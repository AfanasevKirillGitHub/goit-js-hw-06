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
