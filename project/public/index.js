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
const figureSelection = document.getElementById("select");
const responseContainer = document.getElementById("response");
const resultUser = document.getElementById("responseUser");
const resultCpu = document.getElementById("responseCpu");
const text = document.getElementById("dynamicText");
const playAgain = document.getElementById("playAgain");
const humanWinIcon = document.getElementById("humanWin");
const humanLostIcon = document.getElementById("humanLost");
const humanTieIcon = document.getElementById("humanTie");
const cpUWinIcon = document.getElementById("cpuWin");
const cpuLostIcon = document.getElementById("cpuLost");
const cpuTieIcon = document.getElementById("cpuTie");
const scorePerson = document.getElementById("scorePerson");
const scoreCpu = document.getElementById("scoreMachine");
const rock = 1;
const paper = 2;
const scissors = 3;
let aleatoria;

let user;
let machine; //cpu
let result;

let scoreMachine = 0; //machineScore
let scoreUser = 0; //userScore

let lastSelect = { user: 0, machine: 0 }; //new one
let executed = false; //new one
let machinesWon = "Machines won the war"; //new one
let humansWon = "Humans won the war"; //new one
let tie = "We got a tie"; //new one

// const generatingAleatoria = () => {
//   aleatoria = Math.floor(Math.random() * (3 - 1 + 1) + 1);
// };

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
  figureSelection.style.display = "none";
  responseContainer.style.display = "flex";
  resultUser.src = "./assets/static/rock.png";
  functAleatoria();
};

const paperSelected = () => {
  user = paper;
  figureSelection.style.display = "none";
  responseContainer.style.display = "flex";
  resultUser.src = "./assets/static/paper.png";
  functAleatoria();
};

const scissorsSelected = () => {
  user = scissors;
  figureSelection.style.display = "none";
  responseContainer.style.display = "flex";
  resultUser.src = "./assets/static/scissors.png";
  functAleatoria();
};

const functAleatoria = () => {
  // generatingAleatoria();
  // if (aleatoria === rock) {
  //   machine = rock;
  //   resultCpu.src = "./assets/static/rock.png";
  // } else if (aleatoria === paper) {
  //   machine = paper;
  //   resultCpu.src = "./assets/static/paper.png";
  // } else if (aleatoria === scissors) {
  //   machine = scissors;
  //   resultCpu.src = "./assets/static/scissors.png";
  // }
  if (executed === false) {
    executed = true;
    machine = paper;
    lastSelect.machine = 2;
  } else if (result === tie) {
    if (lastSelect.machine === 3) {
      machine = rock;
    } else {
      machine = lastSelect.machine + 1;
    }
  } else if (result === machinesWon) {
    machine = lastSelect.user;
  } else if (result === humansWon) {
    if (lastSelect.machine === 1) {
      machine = scissors;
    } else {
      machine = lastSelect.machine - 1;
    }
  }
  showResult();
};

const restartText = () => {
  text.textContent = "Rock, paper, scissors...";
};

const showResult = () => {
  if (user === machine) {
    result = tie;
  } else if (user === rock && machine === paper) {
    result = machinesWon;
    scoreMachine += 1;
  } else if (user === rock && machine === scissors) {
    result = humansWon;
    scoreUser += 1;
  } else if (user === paper && machine === rock) {
    result = humansWon;
    scoreUser += 1;
  } else if (user === paper && machine === scissors) {
    result = machinesWon;
    scoreMachine += 1;
  } else if (user === scissors && machine === paper) {
    result = humansWon;
    scoreUser += 1;
  } else if (user === scissors && machine === rock) {
    result = machinesWon;
    scoreMachine += 1;
  }
  scorePerson.textContent = scoreUser;
  scoreCpu.textContent = scoreMachine;
  text.textContent = result;
};

const volverAJugar = () => {
  responseContainer.style.display = "none";
  figureSelection.style.display = "flex";
  text.textContent = "Rock, paper, scissors...";
};

back.addEventListener("click", volverAlMenu);
playBtn.addEventListener("click", esconderInicio);
playH.addEventListener("click", esconderInicio);
rockSelection.addEventListener("click", rockSelected);
paperSelection.addEventListener("click", paperSelected);
scissorsSelection.addEventListener("click", scissorsSelected);
playAgain.addEventListener("click", volverAJugar);
