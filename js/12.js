// Iteradores en js

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'PHP'];

console.log('Foreach');
tecnologias.forEach(function(tecnologia, index) {
    console.log(`${index} : ${tecnologia}`);
});
// forEach no crea un nuevo arreglo, solo itera sobre el

console.log('Map');
const arrayMap = tecnologias.map(function(tecnologia) {
    return tecnologia;
})

console.log(arrayMap);
//map crea un nuevo arreglo