var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
//Length me permite, así como acceder a cada valor con []
console.log(frutas.length);
console.log(frutas[1]); //Return Platano
console.log(frutas[1][0]); //Puedo acceder a cada letra

//Agregar elementos
frutas.push("Uvas");
console.log(frutas);

//Eliminar el último elemento
var otras = frutas.pop();
console.log(frutas);

//Agregar elemento al principio
frutas.unshift("Uvas");
console.log(frutas);

//Borrar primer elemento
frutas.shift();
console.log(frutas);

//Posicion de un elemento
position = frutas.indexOf("Cereza");
console.log(position);
