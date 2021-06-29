function auto(marca, modelo, año) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
}

let autoNuevo = new auto("Tesla", "Model 3", 2021);
console.log(autoNuevo);

let autoNuevo2 = new auto("Tesla", "Model X", 2018);
console.log(autoNuevo2);

let autoNuevo3 = new auto("Toyota", "Corolla", 2020);
console.log(autoNuevo3);

var autos = [];
for (let i = 0; i < 30; i++) {
  var marca = prompt("Ingresa la marca del auto");
  var modelo = prompt("Ingresa el modelo del auto");
  var annio = prompt("Ingresa el año del auto");
  autos.push(new auto(marca, modelo, annio));
}

for (let i = 0; i < autos.length; i++) {
  console.log(autos[i]);
}
