const tecnologias = ['html','css','js','react']
const numeros = [1,2,3,4,5,6,7,8,9,10]

// Includes
let resultado = tecnologias.includes('js')
console.log(resultado)

// FindIndex - Retorna o indice do elemento
resultado = tecnologias.findIndex(tecnologia => tecnologia === 'js')
console.log(resultado)

// Some - Retorna true ou false
resultado = numeros.some(numero => numero > 10)
console.log(resultado)

//Find
resultado = numeros.find(numero => numero === 5)
console.log(resultado)

//Every - Retorna true ou false todos os elementos se deben cumplir la condicion
resultado = numeros.every(numero => numero > 0)
console.log(resultado)

//Reduce 
resultado = numeros.reduce((total,numero) => total + numero,0)
console.log(resultado)

//Filter
resultado = tecnologias.filter(tech => tech !== 'js')
console.log(resultado)