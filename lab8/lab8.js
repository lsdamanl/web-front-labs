function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    
    let locales = {
        'Дата и время для русской локали': 'ru-RU',
        'Дата и время для локали ЮАР': 'en-ZA',
        'Дата и время для локали Египта': 'ar-EG',
        'Дата и время для греческой локали': 'el-GR',
        'Дата и время для пакистанской локали': 'en-PK',
        'Дата и время для китайской локали': 'zh-CN',
        'Дата и время для французской локали': 'fr-FR',
        'Дата и время для немецкой локали': 'de-DE',
        'Дата и время для японской локали': 'ja-JP',
        'Дата и время для индийской локали': 'hi-IN'
    };

    let result = '';

    for (let [localeName, localeCode] of Object.entries(locales)) {
        result += `${localeName}: ${today.toLocaleString(localeCode)}<br>`;
    }


    let currentYear = today.getFullYear();
    let currentMonth = today.toLocaleString('ru-RU', { month: 'long' });
    let currentDate = today.getDate();
    let currentDay = today.toLocaleString('ru-RU', { weekday: 'long' });


    let dateInfo = `
        Текущий год: ${currentYear}<br>
        Текущий месяц: ${currentMonth}<br>
        Текущая дата: ${currentDate}<br>
        День недели: ${currentDay}<br>
    `;

    out.innerHTML = result + `<div id="date-info">${dateInfo}</div>`;
}
function getDayOfWeek() {
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value - 1; 
    let year = document.getElementById('year').value;

    if (day && month >= 0 && year) {
        let date = new Date(year, month, day);
        let options = { weekday: 'long' };
        let dayOfWeek = date.toLocaleString('ru-RU', options);
        document.getElementById('day-of-week').innerText = `День недели: ${dayOfWeek}`;
    } else {
        document.getElementById('day-of-week').innerText = 'Пожалуйста, введите корректные значения даты.';
    }
}