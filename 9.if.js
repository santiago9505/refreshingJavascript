// if (true) {
//   console.log("Hola");
// } else {
//   console.log("nothing");
// }
let edad = 46;

if (edad > 18) {
  console.log(`Felicidades, eres mayor de edad hace ${edad - 18} años`);
} else if (edad === 18) {
  console.log("primera vez votando");
} else {
  console.log("No puedes votar perro");
}

//Operador ternario

var numero = 3;

var resultado = numero === 1 ? "Si soy un uno" : "No soy uno";
console.log(resultado);
