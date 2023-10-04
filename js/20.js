// Optional Chaining - encadenamiento opcional
const alumno = {
  nombre: "Juan",
  clase: "Programacion 1",
  aprobado: true,
  examenes: {
    parcial1: 8,
    parcial2: 6,
    parcial3: 9,
  },
};

//Forma incorrecta de validar si existe un atributo
if (alumno.examenes.parcial1) {
  console.log(alumno.examenes.parcial1);
}
// Usando Optional Chaining
console.log(alumno.examenes?.parcial4); // 8

//Simulacion de una API
setTimeout(() => {
  alumno.examenes = {
    parcial1: 8,
    parcial2: 6,
    parcial3: 9,
  };
  // ver si existe el atributo
  console.log(alumno.examenes?.parcial3); // undefined
}, 2000)


