const startBtn = document.querySelector(".start")
const icons = document.querySelector(".icons");
const easyLevel = document.querySelector(".easy-level");
const mediumLevel = document.querySelector(".medium-level");
const hardLevel = document.querySelector(".hard-level");
const cardContainer = document.querySelector(".container");
const cardBack = document.querySelector('.back');
const cardFront = document.querySelector('.front');
const card = document.querySelector('.card');
const cards = document.querySelectorAll('.card');

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

//Function to change grid depending from Choosed level
function changeGrid() {
  let grid = 0;
  //   if (easyLevel.checked === true) {
  // document.querySelector(".container").innerHTML = "";
  //     grid = 20;
  //     document.querySelector(".container").innerHTML = "";
  //   cardContainer.style.gridTemplate = 'repeat(4, 70px) / repeat(5, 70px)';
  //   for (let i = 0; i < grid; i++) {
  //     cardContainer.insertAdjacentHTML('beforeEnd', '<div class="card"><div class="front"></div><div class="back"></div></div>');
  //   }
  //   }
  if (mediumLevel.checked === true) {
    grid = 10;
    document.querySelector(".container").innerHTML = "";
    cardContainer.style.gridTemplate = 'repeat(5, 70px) / repeat(6, 70px)';
    for (let i = 0; i < grid; i++) {
      cardContainer.insertAdjacentHTML('beforeEnd', `<div class="card" id="${i}"><div class="front"></div><div class="back"></div></div>`);
      let random = Math.floor(Math.random() * 21);
      document.getElementById(i).style.backgroundImage = `url('/img/${random}.png')`;
      document.getElementById(i).addEventListener('click', flip);
      
    }
    }
  // if (hardLevel.checked === true) {
  //   grid = 20;
  //   document.querySelector(".container").innerHTML = "";
  //       cardContainer.style.gridTemplate = 'repeat(6, 70px) / repeat(7, 70px)';
  //   for (let i = 0; i < grid; i++) {
  //     cardContainer.insertAdjacentHTML('beforeEnd', '<div class="card"><div class="front"></div><div class="back"></div></div>');
  //   }
  //   }
}
mediumLevel.addEventListener("click", changeGrid);
hardLevel.addEventListener("click", changeGrid);
easyLevel.addEventListener("click", changeGrid);

// Function to flip cards


// function flip() {
//   cards.forEach(el => {
//     el.classList.toggle("flip");
//   })
// }

function flip() {
  if (this.classList.contains('flip')) {
    this.classList.remove('flip')
  } else {
    this.classList.add('flip');
  }
}

// cardFront.addEventListener("click", flip);
// cardBack.addEventListener("click", flip);
// card.addEventListener("click", flip);

// cards.forEach(card => card.addEventListener('click', flip));
// card.addEventListener('click', flip);