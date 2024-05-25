function showTime() {
    function updateClock() {
        const now = new Date();
        const seconds = now.getSeconds();
        const secondHand = document.getElementById('second-hand');
        const secondsDeg = ((seconds / 60) * 360) + 270;
        secondHand.style.transform = `rotate(${secondsDeg}deg)`;
        const currentTime = now.toLocaleTimeString('ru-RU');
        document.getElementById('time').innerHTML = currentTime;
    }

    setInterval(updateClock, 1000);
    updateClock(); 
}
document.addEventListener('DOMContentLoaded', () => {
    const clock = document.getElementById('clock');
    for (let i = 1; i <= 12; i++) {
        const number = document.createElement('div');
        number.className = 'number';
        number.innerText = i;
        const angle = i * 30;
        const x = 50 + 40 * Math.cos((angle - 90) * Math.PI / 180);
        const y = 50 + 40 * Math.sin((angle - 90) * Math.PI / 180);
        number.style.left = `${x}%`;
        number.style.top = `${y}%`;
        clock.appendChild(number);
    }
});