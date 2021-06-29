const rock = 1;
const paper = 2;
const scissors = 3;
let cpu;
let select = prompt("1. Rock, 2. Paper, 3. Scissors");

let aleatoria = Math.floor(Math.random() * (3 - 1 + 1) + 1);
if (aleatoria === 1) {
  cpu = rock;
  console.log(cpu);
} else if (aleatoria === 2) {
  cpu = paper;
  console.log(cpu);
} else {
  cpu = scissors;
  console.log("cpu: " + cpu);
}

if (select === "1" || select === "rock") {
  user = rock;
  console.log("human: " + user);
} else if (select === "2" || select === "paper") {
  user = paper;
  console.log("human: " + user);
} else {
  user = scissors;
  console.log("human: " + user);
}
if (cpu === user) {
  console.log("We got a tie");
} else if (cpu === paper && user === rock) {
  console.log("Machines won the war");
} else if (cpu === paper && user === scissors) {
  console.log("Humans are alive");
} else if (cpu === rock && user === scissors) {
  console.log("Machines won the war");
} else if (cpu === rock && user === paper) {
  console.log("Humans are alive");
} else if (cpu === scissors && user === paper) {
  console.log("Machines won the war");
} else if (cpu === scissors && user === rock) {
  console.log("Humans are alive");
}
