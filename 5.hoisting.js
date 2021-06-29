console.log(myName); //Esto nos enviaría undefined porque coloca myName = undefined
var myName;

//en funciones también se puede dar el hoisting
hey();
function hey() {
  console.log("Hola, " + myName);
}
myName = "Santi";
