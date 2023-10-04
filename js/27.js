// Eventos del DOM - Eventos submit

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //Previene el comportamiento por defecto del formulario

  //prevenir alertas duplicadas
  const alertaPrevia = document.querySelector('.alerta');
  alertaPrevia ? alertaPrevia.remove() : null;
  // if(alertaPrevia){
  //   return;
  // }

  //Generar alerta 
  const alerta = document.createElement('DIV');
  alerta.textContent = 'Los campos son obligatorios';
  alerta.classList.add('alerta','bg-red-500','text-white','uppercase','text-sm','text-center','p-2','font-black');

  const nombre = document.querySelector("#nombre").value;
  const password = document.querySelector("#password").value;

  if (nombre === "" || password === "") {

    formulario.appendChild(alerta); //Agrega el elemento al formulario

    setTimeout(()=>{
      alerta.remove(); //Elimina el elemento del DOM
    },2000)

    return; //Detiene la ejecución del código
  } else {
    console.log("Enviando formulario");
  }
});
