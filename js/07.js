const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

const cliente = {
  nombre: "Juan",
  premium: true,
};

// reeescribir sobre el objeto producto
// const nuevoObjeto = Object.assign(producto, cliente);
// console.log(nuevoObjeto); 

//reescribir sobre el objeto cliente
// const nuevoObjeto2 = Object.assign(cliente, producto);
// console.log(nuevoObjeto2);


//unir 2 objetos
const nuevoObjeto = {
  producto,
  cliente
}

console.log(nuevoObjeto);

// usar para retomar el valor de dos objetos en uno solo