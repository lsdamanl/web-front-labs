function updateTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}

function updateSeconds() {
    let today = new Date();
    let seconds = today.getSeconds();
    document.getElementById('seconds').innerHTML = seconds;
}

setInterval(updateTime, 1000);
setInterval(updateSeconds, 1000);