let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let intervalId;

function start() {
  intervalId = setInterval(updateTimer, 10);
}

function stop() {
  clearInterval(intervalId);
}

function reset() {
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
}

function updateTimer() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    seconds += 1;
    milliseconds = 0;
  }
  if (seconds === 60) {
    minutes += 1;
    seconds = 0;
  }
  updateDisplay();
}

function updateDisplay() {
  const minutesString = padZeroes(minutes, 2);
  const secondsString = padZeroes(seconds, 2);
  const millisecondsString = padZeroes(milliseconds, 3);
  document.getElementById("minutes").textContent = minutesString;
  document.getElementById("seconds").textContent = secondsString;
  document.getElementById("milliseconds").textContent = millisecondsString;
}

function padZeroes(number, length) {
  let string = number.toString();
  while (string.length < length) {
    string = "0" + string;
  }
  return string;
}