// Arrow functions

const sumar = (numero1=0, numero2=10) => {
  console.log(numero1+numero2)
}

sumar()
sumar(2,2)
sumar(2,3)

console.log('----------------------------')
const tecnologias = ['html','css','js','react']

//forEach
tecnologias.forEach((tecnologia) => {
  console.log(tecnologia)
})

console.log('----------------------------')

const techMap = tecnologias.map((tecnologia) => {
  return tecnologia
})

//cuando solo se tiene un parametro se puede omitir los parentesis
const techMapDos = tecnologias.map(tecnologia => (tecnologia) )

console.log(techMap)

console.log('----------------------------')

console.log(techMapDos)

console.log('----------------------------')
// buscar algo en un arreglo
const techFilter = tecnologias.filter(tech => tech === 'js')
console.log(techFilter)