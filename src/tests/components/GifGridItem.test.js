import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Pruebas en <GifGridItem />', () => {
    const title = 'Un titulo';
    const url = 'https://aws.s3/imagen.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de terner un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        //console.log(img.html());
        //console.log(img.props().src);   // para jalar el objeto con las propiedades
        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
    });

    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className=div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    })
    
    
    
    
})
