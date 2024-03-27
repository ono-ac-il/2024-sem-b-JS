const $div = document.getElementById('counter');
const $btnStart = document.getElementById('start');
const $btnStop = document.getElementById('stop');
const $btnReset = document.getElementById('reset');

console.log($div);
var lastSec = 1;
var intervalId= 0;

function onInterval() {
    $div.innerText = lastSec++;
}

function onStartButtonClick() {
    intervalId = setInterval(onInterval, 1000);   
}

function onStopButtonClick() {
    clearInterval(intervalId)
}

function onResetButtonClick() {
    lastSec = 1;
    $div.innerText = 0;
}

$btnStart.addEventListener('click', onStartButtonClick);
$btnStop.addEventListener('click', onStopButtonClick);
$btnReset.addEventListener('click', onResetButtonClick);
