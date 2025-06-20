let score = 0;
const box = document.getElementById('box');
const scoreDisplay = document.getElementById('score');

box.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
  moveBox();
});

function moveBox() {
  const x = Math.random() * (window.innerWidth - 50);
  const y = Math.random() * (window.innerHeight - 50);
  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
}
let timeLeft = 30;
const timerDisplay = document.createElement('p');
timerDisplay.textContent = `Time left: ${timeLeft}s`;
document.body.insertBefore(timerDisplay, box);

const countdown = setInterval(() => {
  timeLeft--;
  timerDisplay.textContent = `Time left: ${timeLeft}s`;
  if (timeLeft === 0) {
    clearInterval(countdown);
    box.remove();
    alert(`Time’s up! Final Score: ${score}`);
  }
}, 1000);
function randomColor() {
  return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

function moveBox() {
  const x = Math.random() * (window.innerWidth - 50);
  const y = Math.random() * (window.innerHeight - 50);
  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
  box.style.backgroundColor = randomColor();
}
box.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
  box.style.width = box.style.height = `${50 - score}px`;
  moveBox();
});
