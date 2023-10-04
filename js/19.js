//Operadores ternarios

const disponible = 100;
const total = 500;
const tarjeta = true;

disponible > total ? console.log("Si se puede pagar") : console.log("Fondos insuficientes");

console.log("---------------");

// Ternarios anidados
disponible > total
  ? console.log("Si se puede pagar")
  : tarjeta
  ? console.log("Si se puede pagar con tarjeta")
  : console.log("Fondos insuficientes");