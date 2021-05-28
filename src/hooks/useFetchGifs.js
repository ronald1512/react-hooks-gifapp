import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading:true
    });

    //los efectos no pueden ser async!! 
    //Usamos el efecto para que solo se dispare cuando cambie la categoría. Y la primera vez que se 'renderiza' , esto ya que los custom hooks son como functional components
    useEffect (()=>{
        getGifs(category).then(imgs => {
            //setTimeout(() => {
                console.log(imgs);
                setState({
                    data: imgs, 
                    loading:false
                });
            //}, 3000);
        })
    },[category])

    return state; //{data:[], loading:true}
}