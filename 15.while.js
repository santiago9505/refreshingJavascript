let estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

const saludarEstudiantes = (estudiante) => {
  console.log(`Hola ${estudiante}`);
};

while (estudiantes.length > 0) {
  let estudiante = estudiantes.shift(); //Recordar que el shift elimina el primer valor "Maria"
  saludarEstudiantes(estudiante);
}
