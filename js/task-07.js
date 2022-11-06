// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться
// размер текста.

const inputChangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.setAttribute('style', `font-size: ${inputChangeEl.value}px`);

inputChangeEl.addEventListener('input', () => {
  textEl.setAttribute('style', `font-size: ${inputChangeEl.value}px`);
});
