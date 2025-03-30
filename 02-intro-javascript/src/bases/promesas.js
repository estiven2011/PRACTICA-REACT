import { getHeroesById } from "./bases/import-export"

// PROMESAS

// const promesa = new Promise ((resolve, reject) => {

//     setTimeout(() => {
//         // console.log('hola desde el setTimeout despues de 3 segundos');
//         const heroe = getHeroesById(1)
//         resolve(heroe)
//     }, 3000)
// })

// promesa.then((heroe) =>{
//     console.log('hola desde el then ', heroe);
// })
// .catch(error => console.error(error))

const getPromiseHeroeByIdAsync = (id) => {

    return new Promise ((resolve, reject) => {

        setTimeout(() => {
            // console.log('hola desde el setTimeout despues de 3 segundos');
            const heroe = getHeroesById(id)
            if(heroe){
                resolve('Heroe desde el resolve', heroe)
            } else {
                reject('heroe no existe')
            }
        }, 3000)
    })


} 

getPromiseHeroeByIdAsync(10)
    .then(heroe => console.log('heroes', heroe))
    .catch(error => console.warn(error))

    
    