
// * EJERCICIO 1
// const producto = {
//     nombre: 'Laptop',
//     precio: 2000,
//     disponible: true,
//     detalles: {
//         marca: 'mac',
//         peso: 1.0
//     }
// }

// function mostrarProductos (obj) {
//     return `Tu producto es ${obj.nombre}, Precio:${obj.precio}, Disponile:${obj.disponible}`
// }

// console.log(mostrarProductos(producto));

// * EJERCICIO 2

// let tareas = []

// function agregarTareas (tareas, nuevaTarea) {
//     return [...tareas, {...nuevaTarea, completada:false}]
// }

// const nuevaTarea = agregarTareas(tareas, {id:1, descripcion: "aprender"})
// const nmasTarea = agregarTareas(tareas, {id:1, descripcion: "aprender muchos mas"})


// console.log(nuevaTarea);
// console.log(nmasTarea);

/* ---------------Arreglos--------------- */


const arreglo = [1,2,3,4,5]

let arreglo2 = [...arreglo, 5]
let arreglo3 = arreglo2.map(item => "item + 1")

console.log(arreglo3);
console.log(arreglo2);
console.log(arreglo);

