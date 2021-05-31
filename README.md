# Seccion
En esta sección se estarán haciendo Custom Hooks

## Enlaces
[Structurig projects and naming components in react](https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76)

[Forma recomentada de estructurar proyectos en react](https://es.reactjs.org/docs/faq-structure.html)


## Helpers
Son funciones que hacen cierto trabajo específico, puede recibir unos argumentos y retornar algo. 


## Custom hooks
* No es más que una forma de extraer logica de un componente, o logica que quiero reutilizar de forma que sea sencillo volver a utilizarlo. 
* Para crearse un custom hook se recomienda crear un nuevo directorio en src llamado hooks. 
* el prefijo use no es obligatorio, pero es un estándar para que entre los desarrolladores sepamos que son hooks. 
* los hooks no son más que funciones. 
* los custom hooks funcionan como si fueran functional components... Pueden usar reducer, pueden usar contextos,...


## Animaciones por css
[Animate](https://animate.style/)


## Codigo de la seccion
[Seccion 6](https://github.com/Klerith/react-giphy-app/releases/tag/v0.6.0)


## ¿Por qué no se puede abrir los archivos del build así no más?
Porque tiene varios imports y eso solo puede ser entendido por un servidor de aplicaciones. 


## Enzyme
Enzyme: Creada por AirBnB.

* Sirve para testear los componentes de react.
* Ahora es mantenida por el equipo de Facebook
* Documentación oficial: https://enzymejs.github.io/enzyme/
* `npm install --save-dev @wojtekmaj/enzyme-adapter-react-17`   --> Enzyme para la version 17 de react: https://github.com/wojtekmaj/enzyme-adapter-react-17 
* `npm install --save-dev enzyme`
* `npm install --save-dev enzyme-to-json` -->https://www.npmjs.com/package/enzyme-to-json
* si despues de escribir toMatchSnapshot() en una prueba y en el archivo generado hay algo como shallowSnapshot en lugar de el html, significa que no está bien configurado el enzyme to json


## Librería para probar hooks
[react-hooks-testing-library](https://react-hooks-testing-library.com/)


## Codigo de la seccion
[seccion 8](https://github.com/Klerith/react-gifexpertapp/releases/tag/v0.8.0)