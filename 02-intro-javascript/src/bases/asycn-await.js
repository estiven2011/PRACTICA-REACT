
const getImagen = async () => {

    try {
        const apiKey='Th5tzDFldAXul2Q5AoPJdu9kK3PxMYxF'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await resp.json()
        const {url} = data.images.original

        
        const img = document.createElement('img')
        img.src = url


        document.body.append(img)
    
    } catch (error) {
        console.log(error);
        
        
    }

    


}

getImagen()


