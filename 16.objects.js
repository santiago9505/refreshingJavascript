const miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2021,
  detalleDelAuto: function () {
    console.log(`Auto ${this.modelo} ${this.annio} ${this.marca}`);
  },
};
//Entrar a un objeto
console.log(miAuto.marca);
//entro a la funcion del detalleDelAuto
miAuto.detalleDelAuto();
