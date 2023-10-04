// Eventos 

const heading = document.querySelector('.heading');
const enlaces = document.querySelectorAll('.navegacion a');

// se agrega el tipo de evento y la funcion que se ejecutara - arrow function
// heading.addEventListener('click', () => {
//   const numero = 10;
//   if(numero === 10) {
//     heading.textContent = 'El numero es 10';
//   }
//   else{
//     heading.textContent = 'El numero es diferente';
//   }
// })

// Cambiar el valor del heading al hacer click
// heading.addEventListener('click', () => {
//   heading.textContent = 'Un Nuevo Heading al dar click';
// })
//doble click
// heading.addEventListener('dblclick', () => {
//   heading.textContent = 'Un Nuevo Heading al dar doble click';
// })

//Cuando se tiene un arreglo con el querySelectorAll se puede recorrer con un forEach
enlaces.forEach( (enlace) => {
  enlace.addEventListener('click', (evento) => {
    evento.preventDefault(); //Previene la accion por defecto de un elemento
    // console.log(evento.target); //target es el elemento que se selecciono
    enlace.textContent = 'nuevo nombre';
    console.log(evento.target);
  })
})