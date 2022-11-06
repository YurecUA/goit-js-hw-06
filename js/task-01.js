// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка
// элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// Нахожу в DOM список ul по id
const categoriesEl = document.querySelector('#categories');

// Вывожу в консоль количество элементво li в этом списке
console.log(`Number of categories: ${categoriesEl.children.length}`);

// Создаю массив li с классом item
const itemEl = categoriesEl.querySelectorAll('.item');

// Создаю функцию для того, что бы вывести у каждого элемента списка
// в консоль заголовок и количество элементов
const itemConsoleLog = item => {
  const itemHeader = item.querySelector('h2');
  const itemElements = item.querySelectorAll('ul li');

  console.log(`Category: ${itemHeader.textContent}
Elements: ${itemElements.length}`);
};

// пользуюсь функцией выше для каждого обьекта массива itemEl
itemEl.forEach(itemConsoleLog);
