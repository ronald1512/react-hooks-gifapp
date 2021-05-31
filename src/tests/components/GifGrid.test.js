import { shallow } from "enzyme"
import GifGrid from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs"
jest.mock("../../hooks/useFetchGifs");
/**MOCK
 * con esto vamos a fingir cualquier llamada a este archivo, y falsearle los retornos. .
 */


describe('Pruebas al componente GifGrid', () => {
    const category = 'Google'


    test('el componente debe mostrarse correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        }); //estos son los valores cuando se renderiza por defecto
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
        /**MOCK
         * es fingir algo, para que el componente crea que tenga algo. 
         */
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'React123'
        },{
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'React123'
        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);
        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false); //no debe de aparecer el Loading...
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })




})
