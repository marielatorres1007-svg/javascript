const name = "Mariela Torres";

let age = 19;

let proyectofavorito = "animacionbulma"

age = 20

console.log(name);
console.log(age);
console.log(proyectofavorito);

console.log ("Mi proyecto favorito es " + proyectofavorito);

function mostrarProyecto(texto){
    console.log(texto)
}

mostrarProyecto(name)
mostrarProyecto(age)
mostrarProyecto(proyectofavorito.toUpperCase())