userTextField.addEventListener('click', function (event) { // Для id="userTextField" (такой id файле html) назначается обработчик через addEventListener


    event.preventDefault(); // Предотвращение поведения ссылки по умолчанию.
    
    const userText = prompt('Введите текст'); // Назначение константы для userText с функцией prompt для ввода пользователем текста.
    
    const userTextField = document.querySelector('#userTextField'); // Назначение константы для id="userTextField", который находится с помощью метода document.querySelector()
    
    userTextField.textContent = userText; // id="userTextField" назначается свойство textContent (позволяет считывать или задавать текстовое содержимое элемента), которому присваивается константа userText, в которую с функции prompt пользователь ввел текст.
    
    })