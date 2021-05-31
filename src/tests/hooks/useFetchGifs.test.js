

//Aqui no puedo hacer match con el snapshot porque no hay nada que renderizar

import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';    //Crea un componente virtual y ahi crea nuestro customHook. Esto ya que los hooks necesitan ser ejecutados en un componente. 



//Librería para probar hooks: https://react-hooks-testing-library.com/



describe('Pruebas en el hook useFetchGifs', () => {
    

    test('debe de retornar el estado inicial', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        const {data, loading} = result.current;     //Esto da lo mismo que haber hecho esto para probar el hook: const {data, loading} = useFetchGifs('One Punch');
        // await waitForNextUpdate(); Lo colocamos despues de la desestructuracion de result.current, para que no jale los valores luego de esperar al getGifs, sino que jale los valores por defecto, sin esperar la parte asíncrona. 
        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    });

    test('debe de retornar un arreglo de imgs y el loading en false', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        //waitForNextUpdate: es una función que retorna una promesa que indica cuando ya ocurrió un cambio en el estado de nuestro custom hook
        await waitForNextUpdate(); // Cuando un hook dispara actualizaciones asíncronas (en nuestro caso el getGifs), no se refleja inmediatamente el resultado. Esta funcion espera a que se finalice la actualización asíncrona. 
        const {data, loading} = result.current;

         expect(data.length).toBe(10);
         expect(loading).toBe(false);
    })
    
    
})
