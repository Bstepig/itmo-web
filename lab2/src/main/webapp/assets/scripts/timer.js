'use strict'
const timeEl = document.getElementById('time');
actualizeTime();
setInterval(actualizeTime, 100); // Каждые 0.1 секунду потому что хочу

function actualizeTime() {
	const time = new Date().toLocaleTimeString();
	timeEl.innerText = time;
}