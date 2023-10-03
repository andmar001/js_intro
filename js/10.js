// Arreglos 
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'PHP', 'VueJS', 'Laravel',29, true];
console.table(tecnologias);

// agregar un nuevo elemento al arreglo - al final del arreglo
tecnologias.push('Python');
console.table(tecnologias);

// agregar un nuevo elemento al arreglo - al inicio del arreglo
tecnologias.unshift('Angular');
console.table(tecnologias);

console.log('-----------------------------');
// mutar un nuevo arreglo usando el spread operator
const nuevoArreglo = [...tecnologias,'sass'];
console.table(nuevoArreglo);

// agregar un nuevo arreglo en medio del arreglo
nuevoArreglo.splice(2,0,'NodeJS');
console.table(nuevoArreglo);

console.log('-----------------------------');
// agregar un elemento al inicio del arreglo
const nuevoArreglo2 = ['Bootstrap',...nuevoArreglo];
console.table(nuevoArreglo2);

const numeros = [10,20,30,40,50];
numeros.pop(); // elimina el ultimo elemento del arreglo
console.table(numeros);

numeros.shift(); // elimina el primer elemento del arreglo  
console.table(numeros);

// posicion, cantidad de elementos a eliminar 
numeros.splice(1,1); // elimina el elemento en la posicion 1
console.table(numeros);

console.log('-----------------------------');
const marcas = ['Nike','Adidas','Puma','Reebok','Converse'];

marcas.filter(function (tech) {
  console.log(tech);
});

console.log('------------Filter -----------------');
//Filter nos va a crear un nuevo arreglo con los elementos que cumplan con la condicion
const marcasFilter = marcas.filter(function (tech) {
  return tech != 'Nike' && tech != 'Adidas';
})
console.table(marcasFilter);