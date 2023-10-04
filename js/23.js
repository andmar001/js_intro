const heading = document.querySelector('.heading');
heading.textContent = 'Un Nuevo Heading';
// heading.classList.remove('text-4xl'); // Eliminar una clase

const inputNombre = document.querySelector('#nombre');
// inputNombre.value = 'Juan'; // Asignar un valor al input
// inputNombre.classList.remove('rounded-lg','text-sm'); // Eliminar clases

// cuando se selecciona un elemento con querySelectorAll, se crea un arreglo
const enlaces = document.querySelectorAll('.navegacion a');

enlaces.forEach( enlace => enlace.textContent = 'Nuevo Texto');