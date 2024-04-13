// Функция для отображения или скрытия сохраненных данных
function toggleUserData(event) {
    event.preventDefault(); // Предотвращаем стандартное действие ссылки (переход по адресу)

    // Получаем сохраненные данные из localStorage
    const userDataJSON = localStorage.getItem('userData');

    // Проверяем, есть ли сохраненные данные
    if (userDataJSON) {
        // Если данные уже отображены, скрываем их
        if (document.getElementById('userDataContainer').innerHTML) {
            // Очищаем содержимое контейнера
            document.getElementById('userDataContainer').innerHTML = '';
            // Меняем текст ссылки на "Показать сохраненные данные"
            document.getElementById('toggleUserDataLink').textContent = 'Показать сохраненные данные';
        } else {
            // Преобразуем JSON в объект
            const userData = JSON.parse(userDataJSON);
            // Формируем HTML-код для вывода данных с переводом строки
            const messageWithBreaks = userData.message.replace(/\n/g, '<br>'); // Заменяем символы новой строки на <br>
            const userDataHTML = `
                <p><strong>Имя:</strong> ${userData.name}</p>
                <p><strong>Email:</strong> ${userData.email}</p>
                <p><strong>Сообщение:</strong><br>${messageWithBreaks}</p>
            `;
            // Выводим данные в блок userDataContainer
            document.getElementById('userDataContainer').innerHTML = userDataHTML;
            // Меняем текст ссылки на "Скрыть данные"
            document.getElementById('toggleUserDataLink').textContent = 'Скрыть данные';
        }
    } else {
        // Если данных нет, выводим сообщение
        document.getElementById('userDataContainer').innerHTML = '<p>Нет сохраненных данных.</p>';
    }
}

// Добавляем обработчик события клика по ссылке
document.getElementById('toggleUserDataLink').addEventListener('click', toggleUserData);

// Добавляем обработчик события клика по ссылке
document.getElementById('toggleUserDataLink').addEventListener('click', toggleUserData);


// Добавляем обработчик события клика по ссылке
document.getElementById('toggleUserDataLink').addEventListener('click', toggleUserData);

// Добавляем обработчик события клика по ссылке
document.getElementById('toggleUserDataLink').addEventListener('click', toggleUserData);

// Функция для обработки отправки формы
function handleSubmit(event) {
    event.preventDefault(); // Предотвращаем стандартное действие формы (перезагрузку страницы)

    // Получаем значения полей формы
    const name = document.querySelector('input[name="text_field"]').value;
    const email = document.querySelector('input[name="email_field"]').value;
    const message = document.querySelector('textarea[name="message_field"]').value;

    // Проверяем валидность email
    if (!isValidEmail(email)) {
        alert('Пожалуйста, введите корректный email.');
        return;
    }

    // Создаем объект с данными
    const userData = {
        name: name,
        email: email,
        message: message
    };

    // Сохраняем объект в localStorage (или можете отправить на сервер)
    localStorage.setItem('userData', JSON.stringify(userData));

    // Очищаем поля формы
    document.querySelector('input[name="text_field"]').value = '';
    document.querySelector('input[name="email_field"]').value = '';
    document.querySelector('textarea[name="message_field"]').value = '';

    // Оповещение об успешной отправке
    alert('Ваши данные были успешно отправлены!');
}

// Добавляем обработчик события отправки формы
document.querySelector('form').addEventListener('submit', handleSubmit);

// Функция для проверки валидности email
function isValidEmail(email) {
    // Простая проверка email-адреса на наличие символов '@' и '.'
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}