console.log("Test");


const startBtn = document.querySelector("#startBtn") as HTMLButtonElement;
const pauseBtn = document.querySelector("#pauseBtn") as HTMLButtonElement;
const restartBtn = document.querySelector("#restartBtn") as HTMLButtonElement;

const minutesInput = document.querySelector("#minutesInput") as HTMLInputElement;
const countdownDisplay = document.querySelector(".countdown-display") as HTMLDivElement;

let intervalId: number | null = null;
let timeLeft: number = 0; 

// Funktion, um den Countdown anzuzeigen
const updateDisplay = () => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  countdownDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};


const startCountdown = () => {
    const inputMinutes = Number(minutesInput.value);

    timeLeft = inputMinutes * 60 - 1;
    updateDisplay();
  
    if (intervalId) clearInterval(intervalId); 
  
    intervalId = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(intervalId!);
        intervalId = null;
        countdownDisplay.textContent = "00:00";
      }
    }, 1000);
  };

//  function stop
const pauseCountdown = () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

// function restart
const restartCountdown = () => {
  startCountdown();
};



startBtn.addEventListener("click", startCountdown);
pauseBtn.addEventListener("click", pauseCountdown);
restartBtn.addEventListener("click", restartCountdown);
