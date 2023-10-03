const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

//Reescribir el valor de una propiedad
producto.nombre = "Monitor de 100 pulgadas";

//Agregar nuevas propiedades
producto.imagen = "imagen.jpg";
console.log(producto);

//Eliminar propiedades
delete producto.disponible;
console.log(producto);

console.log("**********");
//Eliminar de manera moderna
const { disponible, precio,imagen, ...productoNuevo } = producto;
console.log(productoNuevo);


// console.log("**********");
// Object.freeze(producto);

// console.log("**********");
// Object.seal(producto);
