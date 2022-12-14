// Три элемента:
const = document.querySelector ('input') // поле ввода
const = document.querySelector ('button') // кнопка
const duplicateField = document .querySelector ('#duplicateField') // текстовый блок duplicateField
// Ввод текста в поле ввода (input), текст дублируется в текстовый блок с id duplicateField.
// Событие-элемент: нажатие клавиши на клавиатуре для поля ввода.
input.addEventListener ('input', function (event) {
event.preventDefault();
duplicateField.textContent = input.value;
})
// При нажатии кнопки «Вывести текст в консоль и удалить из формы» текст, написанный в input, выводится в консоли, а поле ввода и duplicateField очищены.
// Событие-элемент: нажатие левой клавиши мыши для кнопки.
button.addEventListener ('click', function (event) {
console.log(input.value)
inputvalue = "";
duplicateField.textContent = "";
})