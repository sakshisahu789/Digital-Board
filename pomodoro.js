let timer;
let isRunning = false;
let time = 25 * 60; // 25 minutes in seconds

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

function updateDisplay() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    minutesDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (time > 0) {
                time--;
                updateDisplay();
            } else {
                clearInterval(timer);
                alert('Time\'s up!');
                isRunning = false;
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    time = 25 * 60;
    updateDisplay();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

updateDisplay();
