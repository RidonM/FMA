const timeDisplay = document.querySelector("#timeDisplay");

const lapInfo = document.querySelector("#lapInfo");
const lapCount = document.querySelector("#lapCount");
const splitCount = document.querySelector("#splitCount");
const totalCount = document.querySelector("#totalCount");

const resetBtn = document.querySelector("#resetBtn");
const lapBtn = document.querySelector("#lapBtn");
const stopBtn = document.querySelector("#stopBtn");
const startBtn = document.querySelector("#startBtn");

let timerInterval;
let elapsedTime = 0;
let paused = true;

let lap = 0;

lapBtn.classList.add('pointer-none');

function displayTime() {
    let minutes = Math.floor((elapsedTime % 3600000) / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);
    let miliseconds = Math.floor(elapsedTime % 1000);

    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    miliseconds = String(miliseconds).slice(0, 2).padStart(2, '0');

    timeDisplay.textContent = `${minutes}:${seconds},${miliseconds}`;
}

startBtn.addEventListener('click', () => {
    startTimer();
    startBtn.classList.add('hide');
    stopBtn.classList.add('show');
    resetBtn.classList.remove('show');
    lapBtn.classList.remove('hide');
    lapBtn.classList.remove('pointer-none');
});

function startTimer() {
    if (paused) {
        paused = false;
        timerInterval = setInterval(() => {
            elapsedTime += 10;
            displayTime();
        }, 10);
    }
}

stopBtn.addEventListener('click', () => {
    stopTimer();
    startBtn.classList.remove('hide');
    stopBtn.classList.remove('show');
    resetBtn.classList.add('show');
    lapBtn.classList.add('hide');
})

function stopTimer() {
    if (!paused) {
        paused = true;
        clearInterval(timerInterval);
    }
}

resetBtn.addEventListener('click', () => {
    location.reload();
})

lapBtn.addEventListener('click', () => {
    lap++;
    addLap();
})

let lapsArray = [];

let previousLapEndTime = 0;

function addLap() {
    let lapEndTime = elapsedTime;
    let lapElapsedTime = lapEndTime - previousLapEndTime;

    let lapMinutes = Math.floor((lapElapsedTime % 3600000) / 60000);
    let lapSeconds = Math.floor((lapElapsedTime % 60000) / 1000);
    let lapMilliseconds = Math.floor(lapElapsedTime % 1000);

    lapMinutes = String(lapMinutes).padStart(2, '0');
    lapSeconds = String(lapSeconds).padStart(2, '0');
    lapMilliseconds = String(lapMilliseconds).slice(0, 2).padStart(2, '0');

    lapsArray.unshift({
        lapNumber: lap,
        lapTime: `${lapMinutes}:${lapSeconds},${lapMilliseconds}`,
        totalTime: timeDisplay.textContent
    });

    let html = "";
    lapsArray.forEach((lapData) => {
        html += `<span>Lap ${lapData.lapNumber}</span><span class="split">${lapData.lapTime}</span><span class="total">${lapData.totalTime}</span>`;
    });

    lapInfo.innerHTML = html;

    previousLapEndTime = lapEndTime;
}
