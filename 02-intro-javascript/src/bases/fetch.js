// FETCH API

const apiKey='Th5tzDFldAXul2Q5AoPJdu9kK3PxMYxF'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
.then(response => response.json())
.then(({data}) => {
    const url_img = data.images.original.url // o con desetructuracion const {url} = data.images.original
    console.log(url_img)

    const img = document.createElement('img')
    img.src = url_img

    document.body.append(img)
})
.catch(error => console.warn(error))