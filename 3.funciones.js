//Declarativas
function myFunction(a) {
  return a;
  // console.log(a);
}
myFunction(2);

//Expresión
var otherFunction = function (a, b) {
  var response = a + b;
  return response;
  // console.log(a / b);
};
otherFunction(10, 3);

//Example
const saludarEstudiante = (estudiante, curso) => {
  console.log(
    `Hola ${estudiante}, espero que disfrutes este curso de ${curso}`
  );
};

saludarEstudiante("Daniel", "Javascript");
