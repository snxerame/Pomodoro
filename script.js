let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTimer, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    isRunning = false;
    alert("Pomodoro completed! Take a break!");
    resetTimer();
  } else {
    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateDisplay();
  }
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  minutes = 25;
  seconds = 0;
  updateDisplay();
}

function updateDisplay() {
  const timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// ... (Your existing timer code)

// Cat movement code
const cats = document.querySelectorAll(".cat");

// Set the initial random positions for the cats
cats.forEach((cat) => {
  setRandomPosition(cat);
});

// Move cats continuously with a delay
function moveCats() {
  cats.forEach((cat) => {
    setRandomPosition(cat);
  });

  // Continue the animation with a delay (adjust the delay as needed)
  setTimeout(moveCats, 1000);
}

// Start the continuous movement
moveCats();

function setRandomPosition(element) {
  const { offsetWidth: boxWidth, offsetHeight: boxHeight } = document.querySelector(".box");
  const maxX = boxWidth - element.clientWidth;
  const maxY = boxHeight - element.clientHeight;

  // Calculate positions based on a grid layout
  const gridSize = 100; // Adjust the grid size as needed
  const randomX = Math.floor(Math.random() * (maxX / gridSize)) * gridSize;
  const randomY = Math.floor(Math.random() * (maxY / gridSize)) * gridSize;

  element.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
