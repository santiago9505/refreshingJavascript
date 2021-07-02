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
  playNow(user);
};

const paperSelected = () => {
  user = paper;
  figureSelection.style.display = "none";
  responseContainer.style.display = "flex";
  resultUser.src = "./assets/static/paper.png";
  playNow(user);
};

const scissorsSelected = () => {
  user = scissors;
  figureSelection.style.display = "none";
  responseContainer.style.display = "flex";
  resultUser.src = "./assets/static/scissors.png";
  playNow(user);
};

const gettingCpu = () => {
  if (executed === false) {
    executed = true;
    cpu = paper;
    resultCpu.src = "./assets/static/paper.png";
    lastSelect.machine = 2;
  } else if (result === tie) {
    if (lastSelect.machine === 3) {
      cpu = rock;
      resultCpu.src = "./assets/static/rock.png";
    } else {
      cpu = lastSelect.machine + 1;
      if (cpu === 2) {
        resultCpu.src = "./assets/static/paper.png";
      } else if (cpu === 3) {
        resultCpu.src = "./assets/static/scissors.png";
      }
    }
  } else if (result === machinesWon) {
    cpu = lastSelect.user;
    if (cpu === 1) {
      resultCpu.src = "./assets/static/rock.png";
    } else if (cpu === 2) {
      resultCpu.src = "./assets/static/paper.png";
    } else if (cpu === 3) {
      resultCpu.src = "./assets/static/scissors.png";
    }
  } else if (result === humansWon) {
    if (lastSelect.machine === 1) {
      cpu = scissors;
      resultCpu.src = "./assets/static/scissors.png";
    } else {
      cpu = lastSelect.machine - 1;
      if (cpu === 1) {
        resultCpu.src = "./assets/static/rock.png";
      } else if (cpu === 2) {
        resultCpu.src = "./assets/static/paper.png";
      }
    }
  }
};

gettingUser = (selection) => (user = selection);

const playNow = (selection) => {
  gettingCpu();
  gettingUser(selection);
  if (user === cpu) {
    result = tie;
    lastSelect.machine = cpu;
    lastSelect.user = user;
  } else if (cpu === paper && user === rock) {
    result = machinesWon;
    scoreMachine += 1;
    lastSelect.machine = paper;
    lastSelect.user = rock;
  } else if (cpu === paper && user === scissors) {
    result = humansWon;
    scoreUser += 1;
    lastSelect.machine = paper;
    lastSelect.user = scissors;
  } else if (cpu === rock && user === paper) {
    result = humansWon;
    scoreUser += 1;
    lastSelect.machine = rock;
    lastSelect.user = paper;
  } else if (cpu === rock && user === scissors) {
    result = machinesWon;
    scoreMachine += 1;
    lastSelect.machine = rock;
    lastSelect.user = scissors;
  } else if (cpu === scissors && user === paper) {
    result = machinesWon;
    scoreMachine += 1;
    lastSelect.machine = scissors;
    lastSelect.user = paper;
  } else if (cpu === scissors && user === rock) {
    result = humansWon;
    scoreUser += 1;
    lastSelect.machine = scissors;
    lastSelect.user = rock;
  }
  scorePerson.textContent = scoreUser;
  scoreCpu.textContent = scoreMachine;
  text.textContent = result;
  console.log(`User: ${user} Cpu: ${cpu} Resultado: ${result}`);
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
