const biblioteca = {
    titulo: "Piense y hagase rico",
    autor: "Gabriel Garcia",
    anioPublicacion: 2010,
    disponible: true,

    isDisponible: function (obj){
        obj.filter((ele) => {
            return ele.disponible = true
        })
    }
}

console.log(biblioteca.isDisponible(biblioteca));
