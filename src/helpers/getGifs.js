
/**encodeURI: se encarga de reemplazar los espacios con %20. Para que la url no falle */
export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=5Wri13KbG52JGsIrordT4hfl8luoDlIU`;
    const resp = await fetch(url);
    const {data}= await resp.json();
    
    const gifs = data.map(img => {
        // Transformamos cada elemento!! Que facil!!!
        return {
            id: img.id,
            title: img.title, 
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs; /**Ya que es async, no retorna el arreglo como tal, sino un promise que contiene el arreglo. */
}
//getGifs();