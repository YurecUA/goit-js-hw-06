// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать
// его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и
// инициализируй её значением 0.

// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение
// счтетчика.

// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const spanEl = document.querySelector('#value');

const increase = () => {
  counterValue += 1;
  spanEl.textContent = counterValue;
};

const descrease = () => {
  counterValue -= 1;
  spanEl.textContent = counterValue;
};

btnIncrement.addEventListener('click', increase);
btnDecrement.addEventListener('click', descrease);
