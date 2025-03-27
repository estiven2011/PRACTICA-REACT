const futbolistas = ['Neymar jr', 'CR7', 'Messi' ]

const [ney11,,messy] = futbolistas

console.log(ney11);


const retornarArray = () => {
    return ['ABCDE', 12345]
}

console.log(retornarArray());
const [letras,numeros] = retornarArray()
console.log(letras, numeros);


// TAREA
// 1. el primer valor del arreglo se llamara nomrbre
// 2. se llamara el setNombre
const useState = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo')}]
}

const [nombre, setNombre] = useState('goku')


console.log(nombre);
setNombre()

