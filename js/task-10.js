// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит
// количество элементов в input и нажимает кнопку Создать, после чего рендерится
// коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их
// в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
// тем самым удаляя все созданные элементы.

// Нахожу все нужные элементы
const refs = {
  controlsBoxEl: document.querySelector('#controls'),
  mainBoxEl: document.querySelector('#boxes'),
  inputEl: document.querySelector('#controls input'),
  buttonEl: document.querySelector('button[data-create]'),
  destroyButtonEl: document.querySelector('button[data-destroy]'),
};

let boxSize = 20;

// фунция, принимающие число и создающая массив
// соответствующей длины.Каждый элемент превращается в div со случайным цветом и размером на 10 больше
function createBoxes(amount) {
  const newArray = [];

  for (let i = 0; i < amount; i += 1) {
    const newBoxEl = document.createElement('div');

    newBoxEl.style.width = boxSize + 10 + 'px';
    newBoxEl.style.height = boxSize + 10 + 'px';
    boxSize += 10;
    newBoxEl.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;

    newArray.push(newBoxEl);
  }

  return refs.mainBoxEl.append(...newArray);
}

refs.inputEl.addEventListener('input', onInputNumber);
function onInputNumber(event) {
  refs.inputEl.value = event.currentTarget.value;
}

function onCreateBtnClick() {
  createBoxes(refs.inputEl.value);
}
refs.buttonEl.addEventListener('click', onCreateBtnClick);

// Функция очищения содержимого
function clearMainBox() {
  refs.mainBoxEl.innerHTML = '';
}

refs.destroyButtonEl.addEventListener('click', clearMainBox);
