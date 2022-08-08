function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.


const button = document.querySelector('.change-color')
console.log(button);

const background =document.querySelector('.color')
console.log(background);

button.addEventListener('click', onButtonClick)

function onButtonClick() {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  background.textContent = `${getRandomHexColor()}`;
}


