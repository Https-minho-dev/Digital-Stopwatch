/**
 * Global Stopwatch Pro
 * API: WorldTimeAPI (Base: http://worldtimeapi.org/api)
 */

// --- STATE ---
let startTime = 0;
let elapsed = 0;
let intervalId = null;

// --- DOM ELEMENTS ---
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapsList = document.getElementById('lapsList');
const errorBox = document.getElementById('errorBox');

// --- EVENT LISTENERS ---
startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', recordLap);

// --- STOPWATCH CORE LOGIC ---
function start() {
    if (intervalId) return;

    startTime = Date.now() - elapsed;
    intervalId = setInterval(update, 10);

    updateButtonStates(true);
}

function pause() {
    clearInterval(intervalId);
    intervalId = null;
    updateButtonStates(false);
}

function reset() {
    pause();
    elapsed = 0;
    renderDisplay(0);
    lapsList.innerHTML = "";
    resetButtonState();
}

function update() {
    elapsed = Date.now() - startTime;
    renderDisplay(elapsed);
}

// --- DOM MANIPULATION ---
function renderDisplay(ms) {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);

    display.textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(centiseconds).padStart(2, '0')}`;
}

function recordLap() {
    const li = document.createElement('li');
    li.innerHTML = `<span>Lap ${lapsList.children.length + 1}</span> <span>${display.textContent}</span>`;
    lapsList.prepend(li);
}

function updateButtonStates(running) {
    startBtn.disabled = running;
    pauseBtn.disabled = !running;
    lapBtn.disabled = !running;
    resetBtn.disabled = false;
}

function resetButtonState() {
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    lapBtn.disabled = true;
    resetBtn.disabled = true;
}

function showError(msg) {
    errorBox.textContent = msg;
    errorBox.classList.remove('hidden');
}

// Initial State
resetButtonState();