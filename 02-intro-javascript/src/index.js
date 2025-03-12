const producto = {
    nombre: 'Laptop',
    precio: 2000,
    disponible: true,
    detalles: {
        marca: 'mac',
        peso: 1.0
    }
}

function mostrarProductos (obj) {
    return `Tu producto es ${obj.nombre}, Precio:${obj.precio}, Disponile:${obj.disponible}`
}

console.log(mostrarProductos(producto));
