let estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

const saludarEstudiante = (estudiante) => {
  console.log(`Hola ${estudiante}`);
};

//ciclo for para saludar a cada estudiante
for (var i = 0; i < estudiantes.length; i++) {
  estudiante = estudiantes[i];
  saludarEstudiante(estudiante);
}

//Otra manera con for of - Relativo al for in de python
for (var estudiante of estudiantes) {
  saludarEstudiante(estudiante);
}

//practicing
let grupo1 = ["Daniel", "Dario", "Daniela", "Duvan"];
let grupo2 = ["Andrés", "Andrea", "Anibal", "Amador"];

let newGroup = grupo1.concat(grupo2);

const quitarUltimaLetra = (persona) => {
  persona = persona.slice(0, -2);
  console.log(persona);
};

for (persona of newGroup) {
  quitarUltimaLetra(persona);
}
