console.log('Hello Universe');

const startButton = document.getElementById("startBtn");
const stopButton = document.getElementById("stopBtn")
const secTimer = document.getElementById("seconds");

function startStop(choice) {
    if (choice == 'start'){
        const startInterval = setInterval(() => {
            secTimer.innerText = Number(secTimer.innerText) + 1;
        }, 1000);
    }else if (choice == 'stop'){
        clearInterval(startInterval);
    } else{
        console.log("Error at startStop else statement");
    }
};

// if startbutton pressed - start interval timer.
startButton.addEventListener('click', (e) => {
    // start interval timer
    startStop('start');
});

// if stop button pressed, stop interval timer.
stopButton.addEventListener("click", (e) => {
    // stop interval timer.
    startStop('stop');
});