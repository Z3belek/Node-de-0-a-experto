const deadpool = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'Regeneración',
  // edad: 50,
  getNombre() {
    return `${ this.nombre } ${ this.apellido } ${ this.poder }`
  }
}


// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

function imprimeHeroe( heroe ) {
  const { nombre, apellido, poder, edad = 0 } = heroe;
  console.log(nombre, apellido, poder, edad);
}

imprimeHeroe(deadpool);