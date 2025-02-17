document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Перешкоджає звичайному відправленню форми

    // Отримуємо введені дані
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Зберігаємо дані у localStorage (це просто для демонстрації)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Повідомлення про успішний вхід (тестове)
    alert('Data saved successfully!');

    // Очистити поля форми
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});
