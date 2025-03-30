import heroes, {owners} from '../data/heroes'

// console.log(owners);


export const getHeroesById = (id) => {
    return heroes.find((heroe) => {
        //? mi solucion
        // return heroe.id == 2

        //! otra opcion, que es mas escalable - la vi en el video
        if(heroe.id == id) {
            return heroe
        }else {
            return false
        }

        // * otra opcion del video, es las mas simpllificada
        // heroe.id == id
    })
}
// console.log(getHeroesById(2));


// TAREA

//? solucion mia
// const getHeroesByOwner = (owner) => {
//     return heroes.filter((heroe) => {
//         return heroe.owner == owner
//     })    
// }

// * solucion video
const getHeroesByOwner = (owner) => heroes.filter ((heroe) => heroe.owner == owner)

// console.log(getHeroesByOwner('DC'), 'este es el filter');
