var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "Tv", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audífonos", costo: 1700 },
];

//Regresa la coincidencia
var encuentraArticulo = articulos.find(function (articulo) {
  console.log(articulo.nombre === "Laptop");
});

articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
});

//Dice si es verdadero o falso que cumple la condición
var articulosBaratos = articulos.some(function (articulo) {
  return console.log(articulo.costo <= 700);
});
