3 + 2; //5
50 - 10; //40
10 * 20; //200
20 / 2; //10

"Diego " + "De Granda"; //"Diego de Granda"
!false; //true-!NO false
var a = 1; //asignación
3 == "3"; //true
3 === "3"; // false
5 < 3; // false
5 > 3; //true
5 <= 6; //true
5 >= 6; //false

8 && 5; //and
8 || 5; //or

const first = 10;
const second = 10;
const third = 10;

if (first > 2 && second > 2 && third > 2) {
  const sum = first + second + third;
  console.log(sum);
} else console.log("shit");

var edad = 40;

while (edad < 80) {
  console.log(edad);
  edad *= 2;
}

//Remainder assignment
a = 10;
b = 4;
console.log((a %= b));

//Exponentiation assignment
x = 5;
y = 2;
console.log((x **= y));

//left shift assignment
let alpha = 4;
alpha <<= 4;
console.log(alpha);

//Right shift assignment
let gama = 10;
gama >>= 3;
console.log(gama);

//Unsigned right shift assignment
let celta = -5;
celta >>>= 2;
console.log(celta);

//Bitwise AND assignment
let dou = 5;
dou &= 2;
console.log(dou);
