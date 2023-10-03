// Template Strings

//Concatenación
const cliente = "Juan";
const saldo = 200;

console.log("El cliente " + cliente + " tiene un saldo de " + saldo + " pesos");
//usando template strings
console.log(`El cliente ${cliente} tiene un saldo de ${saldo} pesos`);

const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

const { nombre,precio } = producto;
console.log(`El producto: ${nombre} tiene un precio de: ${precio}`);