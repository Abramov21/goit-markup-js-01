// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>


const inputEl = document.querySelector('#name-input')
console.log(inputEl);


const spanEl = document.querySelector('#name-output')
console.log(spanEl);

inputEl.addEventListener('input', onInput);

function onInput() {
    if(inputEl.value){
        spanEl.textContent = inputEl.value
    } else{
        spanEl.textContent = 'Anonymous'
    }
    // console.log(inputEl.value);
}