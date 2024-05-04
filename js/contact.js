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