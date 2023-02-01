const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
const icons = document.querySelector(".icons");
const easyLevel = document.querySelector(".easy-level");
const mediumLevel = document.querySelector(".medium-level");
const hardLevel = document.querySelector(".hard-level");
const cardContainer = document.querySelector(".container");
const cardBack = document.querySelector('.back');
const cardFront = document.querySelector('.front');
const cards = document.querySelector('.card');
const header = document.querySelector(".header");

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
}
function returnData(input) {
  return input >= 10 ? input : `0${input}`
}
startBtn.addEventListener('click', start);


//Function to display easy-grid by default
document.addEventListener('DOMContentLoaded', function(){ 
  setTimeout(function(){
        easyLevel.click()
    }, 100)
})

// Function to randomize cards
const pickRandom = (array, items) => {
    const clonedArray = [...array]
    const randomPicks = []

    for (let index = 0; index < items; index++) {
        const randomIndex = Math.floor(Math.random() * clonedArray.length)
        
        randomPicks.push(clonedArray[randomIndex])
        clonedArray.splice(randomIndex, 1)
    }

    return randomPicks
}
const shuffle = array => {
    const clonedArray = [...array]

    for (let index = clonedArray.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1))
        const original = clonedArray[index]

        clonedArray[index] = clonedArray[randomIndex]
        clonedArray[randomIndex] = original
    }

    return clonedArray
}

//Function to change grid depending from Choosed level
function changeGrid() {
  const imgNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  let grid = 0;
    
  if (easyLevel.checked === true) {
      document.querySelector(".container").innerHTML = "";
      grid = 20;
  const picks = pickRandom(imgNum,(grid / 2));
      const items = shuffle([...picks, ...picks]);
    cardContainer.style.gridTemplate = 'repeat(4, 70px) / repeat(5, 70px)';
    for (let i = 0; i < grid; i++) {
     cardContainer.insertAdjacentHTML('beforeEnd', `<div class="card" id="${i}"><div class="front"></div><div class="back"></div></div>`);
      document.getElementById(i).style.backgroundImage = `url('img/${items[i]}.png')`;
      document.getElementById(i).style.backgroundSize = "contain";
      document.getElementById(i).addEventListener('click', flip);
    }
    }
  if (mediumLevel.checked === true) {
    grid = 30;
    const picks = pickRandom(imgNum,(grid / 2));
      const items = shuffle([...picks, ...picks]);
    document.querySelector(".container").innerHTML = "";
    cardContainer.style.gridTemplate = 'repeat(5, 70px) / repeat(6, 70px)';
    for (let i = 0; i < grid; i++) {
      cardContainer.insertAdjacentHTML('beforeEnd', `<div class="card" id="${i}"><div class="front"></div><div class="back"></div></div>`);
      document.getElementById(i).style.backgroundImage = `url('img/${items[i]}.png')`;
       document.getElementById(i).style.backgroundSize = "contain";
      document.getElementById(i).addEventListener('click', flip);      
    }
    }
  if (hardLevel.checked === true) {
    grid = 42;
     const picks = pickRandom(imgNum,(grid / 2));
      const items = shuffle([...picks, ...picks]);
    document.querySelector(".container").innerHTML = "";
        cardContainer.style.gridTemplate = 'repeat(6, 70px) / repeat(7, 70px)';
    for (let i = 0; i < grid; i++) {
      cardContainer.insertAdjacentHTML('beforeEnd', `<div class="card" id="${i}"><div class="front"></div><div class="back"></div></div>`);
      document.getElementById(i).style.backgroundImage = `url('img/${items[i]}.png')`;
       document.getElementById(i).style.backgroundSize = "contain";
      document.getElementById(i).addEventListener('click', flip);
    }
    }
}
mediumLevel.addEventListener("click", changeGrid);
hardLevel.addEventListener("click", changeGrid);
easyLevel.addEventListener("click", changeGrid);

// Function to flip cards

let flippedImg= [];
let flippedData = {};

function flip() {

  this.classList.toggle('flip');
  // flippedData.id = document.getElementById(this.id).id;
  // flippedData.img = document.getElementById(this.id).style.backgroundImage;
  
  flippedImg.push(new Object({
    id: document.getElementById(this.id).id,
    img: document.getElementById(this.id).style.backgroundImage+document.getElementById(this.id).className,
    class: document.getElementById(this.id).className
  }));

  if (flippedImg.length > 2) {
    closeAll();
    this.classList.toggle('flip');
    flippedData = {};
    flippedImg = [];
   flippedImg.push(new Object({
    id: document.getElementById(this.id).id,
    img: document.getElementById(this.id).style.backgroundImage+document.getElementById(this.id).className,
    class: document.getElementById(this.id).className
  }));
    
  }
  if (flippedImg.length === 2 && flippedImg[0].img === flippedImg[1].img) {

    setTimeout(() => document.getElementById(flippedImg[0].id).style.visibility = 'hidden', 1000)
    setTimeout(() => document.getElementById(flippedImg[1].id).style.visibility = 'hidden', 1000)
    
    console.log('true');
  }
  console.log(flippedImg);
}

// function that flips all cards and shows all img on playground

startBtn.addEventListener('click', showAll);

function showAll() {
   document.querySelectorAll('.card').forEach(card => {
    card.classList.add('flip')
    flippedCounter = 0;
    flippedImg = [];
   });
  setTimeout(closeAll, 2000);
  startBtn.removeEventListener('click', showAll);
  startBtn.style.backgroundColor = 'white';
}

function closeAll() {
  document.querySelectorAll('.card.flip').forEach(card => {
    card.classList.remove('flip')
    flippedCounter = 0;
    flippedImg = [];
    });
}
// Function to reset game
function reset() {
 location.reload();
}
resetBtn.addEventListener("click", reset);
