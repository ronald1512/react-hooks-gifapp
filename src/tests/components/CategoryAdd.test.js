import { shallow } from "enzyme"
import { CategoryAdd } from "../../components/CategoryAdd"



describe('Pruebas en CategoryAdd', () => {
    //const setCategories = () =>{}; //tendría que agregar mucho código para probarla bien desde aqui. Para facilitarlo, jest ya nos incluye ayuda.
    const setCategories = jest.fn(); //ahora puedo saber si fue llamada, las veces que fue llamada, ...
    let wrapper = shallow(<CategoryAdd setcategories={setCategories} />);


    beforeEach(() => {
        jest.clearAllMocks();   // sirve para limpiar todo en jest. 
        wrapper = shallow(<CategoryAdd setcategories={setCategories} />);
    });

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo'
        input.simulate('change', { target: { value: value } });       //no hace falta escribir onChange. Le enviamos el evento e entre las llaves


        expect(wrapper.find('p').text().trim()).toBe(value);  //Recordatorio: el trim() quita los espacios en blanco al inicio y al final del string

    });


    test('No debe de postear la información on submit', () => {
        //wrapper.find('form').simulate('submit', {preventDefault: ()=>{}}) //esta es la forma larga de enviarle una nueva funcion
        wrapper.find('form').simulate('submit', { preventDefault() { } }) //esta es la forma CORTA de enviarle una nueva funcion

        expect(setCategories).not.toHaveBeenCalled();   //aqui le verificamos que no haya sido llamada
    });


    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        /**
         * 1. simular el inputChange
         * 2. simular el submit
         * 3. setCategories se debe de haber llamado
         * 4. el valor del input debe de estar ''
         */
        //1
        const input = wrapper.find('input');
        const value = 'Hola mundo'
        input.simulate('change', { target: { value: value } });       //no hace falta escribir onChange. Le enviamos el evento e entre las llaves
        
        //2
        wrapper.find('form').simulate('submit', { preventDefault() { } }) //esta es la forma CORTA de enviarle una nueva funcion

        //3
        expect(setCategories).toHaveBeenCalled();

        //4
        //expect(input.text()).toBe('');      //esto tambien lo resuelve
        expect(input.prop('value')).toBe('');


    })





})
