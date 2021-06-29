const playBtn = document.getElementById("play");
const playH = document.getElementById("play__header");
const main = document.getElementById("main");
const header = document.getElementById("header");
const counter = document.getElementById("counter");
const gameScreen = document.getElementById("game");
const back = document.getElementById("back");
const rockSelection = document.getElementById("rock");
const paperSelection = document.getElementById("paper");
const scissorsSelection = document.getElementById("scissors");
const rock = 1;
const paper = 2;
const scissors = 3;
let aleatoria = Math.floor(Math.random() * (3 - 1 + 1) + 1);
let user;
let machine;

const esconderInicio = () => {
  header.style.display = "none";
  main.style.display = "none";
  counter.style.display = "flex";
  myVar = setTimeout(backToMenu, 4000);
};

const volverAlMenu = () => {
  gameScreen.style.display = "none";
  header.style.display = "flex";
  main.style.display = "flex";
};

function backToMenu() {
  counter.style.display = "none";
  gameScreen.style.display = "flex";
}

const rockSelected = () => {
  user = rock;
  console.log("user: " + user);
  paperSelection.style.display = "none";
  scissorsSelection.style.display = "none";
  if (aleatoria === 1) {
    cpu = rock;
    console.log("cpu: " + cpu);
  } else if (aleatoria === 2) {
    cpu = paper;
    console.log("cpu: " + cpu);
  } else {
    cpu = scissors;
    console.log("cpu: " + cpu);
  }
};

const paperSelected = () => {
  user = paper;
  console.log("user: " + user);
  rockSelection.style.display = "none";
  scissorsSelection.style.display = "none";
  if (aleatoria === 1) {
    cpu = rock;
    console.log("cpu: " + cpu);
  } else if (aleatoria === 2) {
    cpu = paper;
    console.log("cpu: " + cpu);
  } else {
    cpu = scissors;
    console.log("cpu: " + cpu);
  }
};

const scissorsSelected = () => {
  user = scissors;
  console.log("user: " + user);
  paperSelection.style.display = "none";
  rockSelection.style.display = "none";
  if (aleatoria === 1) {
    cpu = rock;
    console.log("cpu: " + cpu);
  } else if (aleatoria === 2) {
    cpu = paper;
    console.log("cpu: " + cpu);
  } else {
    cpu = scissors;
    console.log("cpu: " + cpu);
  }
};

const showCpu = () => {};

back.addEventListener("click", volverAlMenu);
playBtn.addEventListener("click", esconderInicio);
playH.addEventListener("click", esconderInicio);
rockSelection.addEventListener("click", rockSelected);
paperSelection.addEventListener("click", paperSelected);
scissorsSelection.addEventListener("click", scissorsSelected);
