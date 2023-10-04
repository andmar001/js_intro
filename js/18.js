// Operadores ||(or) y &&(and)

const disponible = 1000;
const total = 500;
const tarjeta = false;

if (tarjeta) {
  console.log("Si se puede pagar con tarjeta");
} else if( disponible > total) {
  console.log("Si se puede pagar");
} else {
  console.log("Fondos insuficientes");
}


//El codigo de arriba es lo mismo que el de abajo, se ejecuta lo primero que se cumpla

console.log("---------------");
// lo mismo mejor refactorizado 
if (tarjeta || disponible > total) {
  console.log("Si se puede pagar");
} else {
  console.log("Fondos insuficientes");
}

console.log("---------------");
