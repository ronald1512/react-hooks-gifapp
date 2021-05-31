import React, { useState } from 'react'
import { CategoryAdd } from './components/CategoryAdd'
import GifGrid from './components/GifGrid'

//Snippet: rafc
export const GifExpertApp = ({defaultCategory=[]}) => {
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    /**Si quiero agregar categories dinámicamente no puedo hacerlo de esta forma porque:
     * Primero está declarado como constante
     * Segundo, ¿Cómo le diria a react que hubo un cambio en categories y que necesito que vuelva a renderizar?
     * 
     * Entonces, debemos usar el hook de useState, ya que necesitamos que categories cambie dinamicamente.
    */

    //const [categories, setcategories] = useState(['One Punch'])
    const [categories, setcategories] = useState(defaultCategory)

    // const handleAdd = ()=>{
    //     setcategories([...categories,'HunterXHunter']); //operador spreed!!
    //     //O tambien se puede hacer asi: setCategories( cats => [...cats, 'HunterXHunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2> 
            <CategoryAdd setcategories={setcategories}/>
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map(category=> (
                        <GifGrid 
                            key={category}
                            category={category}/>
                    ))
                }
            </ol>
        </>
    )
}
