import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CategoryAdd = ({setcategories}) => { //aqui usamos desestructuracion porque en realidad esto viene dentro del objeto props
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=>{
        setInputValue(e.target.value)
    }

    const handleSubmit =(e) =>{
        e.preventDefault(); /**Esto es para prevenir el comportamiento por defecto del formulario, que es recargar la página */

        if(inputValue.trim().length>2){
           setcategories( cats => [inputValue,...cats]);
           setInputValue('');
        }
    }

    return (        
        <form onSubmit={handleSubmit}>
            <input 
                    type="text"
                    value={inputValue}
                    onChange= {handleInputChange}
                />
        </form>            
    )
}



CategoryAdd.propTypes = {
    setcategories:PropTypes.func.isRequired
}
