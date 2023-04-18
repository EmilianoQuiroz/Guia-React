const apikey = 'eJToSq0OlaP4ynDCcOAW6lfY8VXQpxGo'; 

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);

peticion
/** Return implicito en el .then */
.then( resp => resp.json() )
/** Traemos la data con el siguiente .then */
.then( ({data}) =>{
    /** La data que nos interesa son las imagenes */
    //console.log(data.images.original.url)
    
    // url desestructurado
    const { url } = data.images.original;

    // mostramos el gift en el html 
    const img = document.createElement('img');
    img.src = url;

    document.body.append( img );
})
.catch(console.warn);