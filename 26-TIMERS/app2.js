console.log('Hello Universe');

const startButton = document.getElementById("startBtn");
const stopButton = document.getElementById("stopBtn");
const resetButton = document.getElementById('resetBtn');
const secTimer = document.getElementById("seconds");

let startInterval;

function startStop(choice) {
    if (choice == 'start'){
        if (!startInterval) {
            startInterval = setInterval(() => {
                secTimer.innerText = Number(secTimer.innerText) + 1;
            }, 1000);
        }
    }else if (choice == 'stop'){
        clearInterval(startInterval);
    }else if (choice == 'reset'){
        secTimer.innerHTML = '00';
        startInterval = null;
    }
};

// if startbutton pressed - start interval timer.
startButton.addEventListener('click', () => {
    // start interval timer
    startStop('start');
});

// if stop button pressed, stop interval timer.
stopButton.addEventListener("click", () => {
    // stop interval timer.
    startStop('stop');
});

// if reset button pressed, reset interval timer.
resetButton.addEventListener("click", () => {
    // stop interval timer.
    startStop('reset');
});