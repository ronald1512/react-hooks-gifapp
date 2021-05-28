// import React, { useState, useEffect } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';


/**useEffect: permite ejecutar cierto código de forma condicional. Aqui lo vamos a usar para que
 * no ejecute el de getGifs cada vez que identifique un cambio en algun state y tenga de renderizar de nuevo. 
*/

const GifGrid = ({category}) => {
    // const [images, setImages] = useState([])
    // useEffect(()=>{
    //     getGifs(category).then(setImages);  //esto es lo mismo que haber hecho: imgs=> setImages(imgs)            -> es exactamente lo mismo
    // }, [category]); //significa que esto quiero que se ejecute solo cuando es componente es renderizado por primera vez
    
    /**
     * React Hook useEffect has a missing dependency: 'category'. 
     * Either include it or remove the dependency array  react-hooks/exhaustive-deps
     * 
     * 
     * Este warning nos indica que si la 'category' cambia, entonces tendría que volver a ejecutar lo que está dentro del useEffect. Para 
     * permitirlo, solo basta añadir category en el [] de dependencias de useEffect.
     * 
     */


    /**             Comenté lo de arriba para a continuacion, usar mi custom hook
     * 
     */

    const {data:images, loading} = useFetchGifs(category);
    



    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            {/** usar && es una forma corta de hacer lo de abajo, si loading=true, va a evaluar el <p></p>  */}
            {loading && <p className="animate__animated animate__flash">Loading</p>}
             <div className="card-grid">
                

                {
                    images.map(img =>(
                        <GifGridItem 
                            key={img.id}
                            {...img}//de esta forma estoy mandando cada una de las propiedades de img como una propiedad independiente!!
                        />
                    ))
                }

            </div>
        </>
    )
}

//RECORDATORIO: Cuando no se ponen las llaves en una funcion de flecha, se hace un return implícito. 

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid
