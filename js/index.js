const startBtn = document.querySelector(".start")
const icons = document.querySelector(".icons");
const easyLevel = document.querySelector(".easy-level");
const mediumLevel = document.querySelector(".medium-level");
const hardLevel = document.querySelector(".hard-level");

//Function to change grid depending from Choosed level
function changeGrid() {
    if (easyLevel.checked === true) {
        icons.style.gridTemplate = 'repeat(4, 100px) / repeat(5, 100px)';
        document.querySelectorAll(".animals")
            .forEach(elem => elem.style.maxWidth = "100px");
    }
        if (mediumLevel.checked === true) {
        icons.style.gridTemplate = 'repeat(5, 80px) / repeat(6, 80px)';
        document.querySelectorAll(".animals")
            .forEach(elem => elem.style.maxWidth = "80px");
    }
        if (hardLevel.checked === true) {
        icons.style.gridTemplate = 'repeat(6, 70px) / repeat(7, 70px)';
        document.querySelectorAll(".animals")
            .forEach(elem => elem.style.maxWidth = "70px");
    }
}
mediumLevel.addEventListener("click", changeGrid);
hardLevel.addEventListener("click", changeGrid);
easyLevel.addEventListener("click", changeGrid);

//Function to create timer
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10);
}
function pause() {
  clearInterval(cron);
}
function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  document.querySelector('.minute').innerText = returnData(minute);
  document.querySelector('.second').innerText = returnData(second);
  document.querySelector('.millisecond').innerText = returnData(millisecond);
}
function returnData(input) {
  return input >= 10 ? input : `0${input}`
}
startBtn.addEventListener('click', start);

// Function to change card image onclick