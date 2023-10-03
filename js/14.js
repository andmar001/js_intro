// fucntion expression

sumar()

// funcion comun a una variable
// const sumar = (numero1=10, numero2=200) => {
//   console.log(numero1+numero2)
// }

//funcion con mas alcance
function sumar(numero1=10, numero2=200){
  console.log(numero1+numero2)
}

sumar()
sumar(2,2)