// 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>


const input = document.querySelector('#font-size-control')
console.log(input.value);
const text = document.querySelector('#text')

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    const inputValue = event.target.value;
    console.log(inputValue);
    text.style.fontSize = `${inputValue}px`;
}