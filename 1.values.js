//primitive values
var number = 40;
var name = "Santiago Guáqueta";
var boolean = true;
var emptyValue = null; //undefined

//Array - Object
var numbers = [1, 2, 3];

//Object
var object = { nombre: "Santi" };

if (typeof numbers === typeof object) {
  console.log("Son iguales");
} else {
  console.log("son diferentes");
}
