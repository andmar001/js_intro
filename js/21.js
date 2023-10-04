// Scope - Alcance

let precio = 300;

function unaFuncion() {
    let precio = 20; // variable local solo existe dentro de la funcion
    console.log(precio);
}

unaFuncion(); // cuando se ejecuta la funcion, se modifica el valor de la variable global precio
console.log(precio);