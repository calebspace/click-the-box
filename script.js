let score = 0;
let timeLeft = 30;

const box = document.getElementById('box');
const scoreDisplay = document.getElementById('score');

// Create and insert timer display
const timerDisplay = document.createElement('p');
timerDisplay.textContent = `Time left: ${timeLeft}s`;
document.body.insertBefore(timerDisplay, box);

// Countdown timer logic
const countdown = setInterval(() => {
  timeLeft--;
  timerDisplay.textContent = `Time left: ${timeLeft}s`;
  if (timeLeft === 0) {
    clearInterval(countdown);
    box.remove();
    alert(`Time’s up! Final Score: ${score}`);
  }
}, 1000);

// Click event for the box
box.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;

  // Shrink box as score increases
  const newSize = Math.max(20, 50 - score); // Keep it at least 20x20px
  box.style.width = box.style.height = `${newSize}px`;

  moveBox();
});

// Move box to random position and change color
function moveBox() {
  const x = Math.random() * (window.innerWidth - 50);
  const y = Math.random() * (window.innerHeight - 50);
  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
  box.style.backgroundColor = randomColor();
}

// Generate random color
function randomColor() {
  return `hsl(${Math.random() * 360}, 100%, 50%)`;
}
