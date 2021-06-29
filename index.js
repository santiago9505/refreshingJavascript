const buttonStart = document.getElementById("start");
const inicio = document.getElementById("inicio");
const playZone = document.getElementById("playZone");
const game = document.getElementById("game");
const rockSelection = document.getElementById("rock");
const paperSelection = document.getElementById("paper");
const scissorsSelection = document.getElementById("scissors");
const rock = 1;
const paper = 2;
const scissors = 3;
let cpu;
let user;

let aleatoria = Math.floor(Math.random() * (3 - 1 + 1) + 1);

const esconderInicio = () => {
  inicio.style.display = "none";
  playZone.style.display = "block";
  game.style.display = "flex";
};
const rockSelected = () => {
  paperSelection.style.display = "none";
  scissorsSelection.style.display = "none";
  user = rock;
  console.log("human: " + user);
  if (cpu === user) {
    console.log("tie");
  } else if (cpu === paper) {
    console.log("Humans lost");
  } else {
    console.log("Humans won");
  }
  showCpu();
};
const paperSelected = () => {
  rockSelection.style.display = "none";
  scissorsSelection.style.display = "none";
  user = paper;
  console.log("human: " + user);
  if (cpu === user) {
    console.log("tie");
  } else if (cpu === scissors) {
    console.log("Humans lost");
  } else {
    console.log("Humans won");
  }
  showCpu();
};
const scissorsSelected = () => {
  paperSelection.style.display = "none";
  rockSelection.style.display = "none";
  user = scissors;
  console.log("human: " + user);
  if (cpu === user) {
    console.log("tie");
  } else if (cpu === rock) {
    console.log("Humans lost");
  } else {
    console.log("Humans won");
  }
  showCpu();
};

const showCpu = () => {
  if (aleatoria === 1) {
    rockSelection.style.display = "flex";
  } else if (aleatoria === 2) {
    paperSelection.style.display = "flex";
  } else {
    scissorsSelection.style.display = "flex";
  }
};

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

buttonStart.addEventListener("click", esconderInicio);
rockSelection.addEventListener("click", rockSelected);
paperSelection.addEventListener("click", paperSelected);
scissorsSelection.addEventListener("click", scissorsSelected);
