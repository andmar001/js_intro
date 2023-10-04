// condicionales

const disponible = 100;
const retirar = 500;

if (disponible > retirar) {
    console.log('Si se puede retirar');
}
else {
    console.log('Fondos insuficientes');
}

console.log('-----------------');

// operacion de comparacion 
const logueado = true;
const edad = 18;

if (logueado == true && edad >= 18) {
    console.log('Bienvenido a tu cuenta');
}
else {
    console.log('Inicia sesion para ingresar');
}

console.log('-----------------');

let n1 = 10;
let n2 = 100;

if (n1 === n2) {
    console.log(`${n1} es igual que ${n2}`);
}
else {
    console.log(`${n1} no es igual que ${n2}`);
}