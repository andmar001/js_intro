// Destructuring de 2 o mas objetos
const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

const cliente = {
  nombre: "Juan",
  premium: true,
};

// Destructuring cuando se tienen 2 objetos con propiedades iguales
const { nombre:nombreProducto } = producto;
const { nombre:nombreCliente } = cliente;

console.log(nombreProducto);
console.log(nombreCliente);

// Evitar colisiones de nombres