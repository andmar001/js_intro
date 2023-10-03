//Objetos
//Los objetos son una coleccion de propiedades, las propiedades son una asociacion de key y value

const nombreProducto = "Monitor de 20 pulgadas";
const precioProducto = 300;
const disponible = true;

//Un objeto agrupa todo en una sola variable
const producto = {
  nombreProducto: "Monitor de 20 pulgadas",
  precioProducto: 300,
  disponible: true,
};

console.log(producto);

//ACCEDER A LAS PROPIEDADES DEL OBJETO
//Forma 1
console.log(producto.nombreProducto);

//Forma 2
console.log(producto["nombreProducto"]);

//Forma 3
const nombre = "nombreProducto";
console.log(producto[nombre]);

//Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";
console.log(producto);

//Eliminar propiedades del objeto
delete producto.disponible;
console.log(producto);

console.log()
console.log()

const nike = {
  modelo: "Nike Air Force 1",
  precio: 150,
  disponible: true,
};

//Destructuring
const { modelo } = nike;
console.log(modelo);
const { algo } = nike;
console.log(algo); //undefined

//Object literal enhancement
const autenticado = true;
const usuario = "Juan";

const nuevoObjeto = {
  autenticado ,
  usuario: usuario
};
console.log(nuevoObjeto);
