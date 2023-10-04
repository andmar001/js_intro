const inputNombre = document.querySelector('#nombre');
const inputPassword = document.querySelector('#password');
const heading = document.querySelector('.heading');

inputNombre.addEventListener('input', (e) =>{
  // console.log(e.target.value); //target es el elemento que se selecciono
  // console.log(e.target.value.length);   
  heading.textContent = e.target.value;
})


//Comportamiento para ocultar el password
inputPassword.addEventListener('input', (e) =>{
  // cambiar input de tipo password a text
  e.target.type = 'text'
  setTimeout(()=>{
    e.target.type = 'password'
  },300)
})


