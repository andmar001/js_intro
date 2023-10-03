// Destructuring de arreglos

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'PHP', 'VueJS'];

// extrae los valores del arreglo acorde a la posicion y los asigna a las variables
const [html, css, js, php, vue] = tecnologias;

console.log(html);
console.log(css);
console.log(js);
console.log(php);
console.log(vue);

console.log('----------------------');

const [htmls,csss,,phpp] = tecnologias;
console.log(php);