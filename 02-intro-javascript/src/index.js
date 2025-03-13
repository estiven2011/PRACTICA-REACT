const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman'
}

//* funcion destructurada dentro de la funcion 
const retornoPersona = (usuario) => {
    const {nombre,edad} = usuario
    console.log(nombre, edad);
}
retornoPersona(persona)


//* Se hace la desestructuracion en el parametro
const devolverUsuario = ({ nombre, clave, rango= 'soldado'}) => {
    return `${clave},  ${nombre}, ${rango}`;
}
console.log('funcion con la desetructuracion en los apramteros de la funcion los campos son: ', devolverUsuario(persona))


//* se devuelve un objeto
const nuevoObjeto = ({nombre, edad, clave}) => {
    return {
        name:nombre,
        anios:edad,
        latitud: {
            lat:555,
            lon:3223
        }
    }
}

const usuarioNew = nuevoObjeto(persona)
console.log('usuario nuevo con las variables cambiadas pero tomando las ya creadas',usuarioNew);

// const {name, anios} = usuarioNew
// console.log('desetructuracion de la nueva varibale (objeto): ',name, anios);

// const {name, anios} = nuevoObjeto(persona) otra opcion que hace lo mismo que mi funcion de arriba

//* Desestructuracion de un objeto dentro de otro objeto
//? Forma uno
// const {name, anios, latitud:{lat, lon}} =  nuevoObjeto(persona)
// console.log(lat, '+', lon);
// console.log('desestruturacion de un objeto dentro de otro objeto',nuevoObjeto(persona));

//? forma dos
const {name, anios, latitud} =  usuarioNew /* OR nuevoObjeto(persona) */  /* Aca se puede inicialixar sea con la creacion de la constante o con la ejecucion de la funcion  */
const {lat:latitu, lon:longitu} = latitud /* Aca se le cambia el nombre ala variable */
console.log('desde la segunda forma de la desestructuracion de objeto dentro de otro objeto',latitu, longitu);


// const {nombre} =  persona
// const {nombre: nombre3} =  persona

// console.log(nombre);
// console.log(nombre3, 'variable renombarada');

// console.log(persona.edad);
// console.log(persona.clave);


