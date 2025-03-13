// * EJEMPLOS DEL VIDEO
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
        anios:edad
    }
}
const usuarioNew = nuevoObjeto(persona)
console.log('usuario nuevo con las variables cambiadas pero tomando las ya creadas',usuarioNew);


// const {nombre} =  persona
// const {nombre: nombre3} =  persona

// console.log(nombre);
// console.log(nombre3, 'variable renombarada');

// console.log(persona.edad);
// console.log(persona.clave);


