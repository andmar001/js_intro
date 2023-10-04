// Eventos del DOM - Eventos submit

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', e =>{
  e.preventDefault(); //Previene el comportamiento por defecto del formulario

  const nombre = document.querySelector('#nombre').value;
  const password = document.querySelector('#password').value;

  if(nombre === '' || password === ''){
    console.log('Los campos son obligatorios');
    return; //Detiene la ejecución del código
  }
  else{
    console.log('Enviando formulario');
  }
});
