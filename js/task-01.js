// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

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
