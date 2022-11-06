// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const makeIngridients = arrayWithIngridients => {
  return arrayWithIngridients.map(ingridient => {
    const newListEl = document.createElement('li');
    newListEl.classList.add('item');
    newListEl.textContent = ingridient;
    return newListEl;
  });
};

const ingridientsArray = makeIngridients(ingredients);
ingredientsList.append(...ingridientsArray);
