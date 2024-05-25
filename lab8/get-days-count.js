function showDaysCount() {
    let today = new Date();
    let inputDate = document.getElementById('birthdate');
    let birthday = new Date(inputDate.value);
    if (isNaN(birthday.getTime())) {
        document.getElementById('result').textContent = 'Введите корректную дату.';
        return;
    }
    let daysCount = Math.floor((today - birthday) / 1000 / 60 / 60 / 24);
    document.getElementById('result').textContent = `Количество дней с даты рождения: ${daysCount}`;
}

function clearInput() {
    document.getElementById('birthdate').value = '';
    document.getElementById('result').textContent = '';
}