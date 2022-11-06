// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль
// при клике на button.change - color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const changeBgnColorBtn = document.querySelector('.change-color');
const hexColor = document.querySelector('.color');

changeBgnColorBtn.addEventListener('click', () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  hexColor.textContent = getRandomHexColor();
});
