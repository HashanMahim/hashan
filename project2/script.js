let timer;
let seconds = 0;
let isRunning = false;

function formatTime(secs) {
    const hrs = Math.floor(secs / 3600).toString().padStart(2, '0');
    const mins = Math.floor((secs % 3600) / 60).toString().padStart(2, '0');
    const secsRemaining = (secs % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secsRemaining}`;
}

function updateDisplay() {
    document.getElementById("display").innerText = formatTime(seconds);
}

function start() {
    if (!isRunning) {
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
        isRunning = true;
    }
}

function stop() {
    clearInterval(timer);
    isRunning = false;
}

function reset() {
    stop();
    seconds = 0;
    updateDisplay();
}
