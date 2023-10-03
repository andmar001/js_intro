// Tipo de datos 

//Undefined
let cliente 
console.log(typeof cliente);

//String
cliente = "Juan";
console.log(typeof cliente);

//Number
cliente = 123;
console.log(typeof cliente);

//Boolean
cliente = true;
console.log(typeof cliente);

//Null
cliente = null;
console.log(typeof cliente);

//Symbol
cliente = Symbol('Symbol');
console.log(typeof cliente);

//Array
cliente = [1,2,3];
console.log(typeof cliente);

//Object
cliente = {
    nombre: 'Juan',
    apellido: 'Perez'
} 
console.log(typeof cliente);

//Date
cliente = new Date();
console.log(typeof cliente);

//Bigint
cliente = 20n;
console.log(typeof cliente);

//Bigint
const numeroGrande = BigInt(1000);
console.log(typeof numeroGrande);
