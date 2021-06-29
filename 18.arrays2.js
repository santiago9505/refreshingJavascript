var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "Tv", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audífonos", costo: 1700 },
];

let articulosFiltrados = articulos.filter(function (articulo) {
  console.log(articulo.costo <= 500);
});

let nombreArticulos = articulos.map(function (articulo) {
  console.log(articulo.nombre);
});
