import { 
    // render,
    unmountComponentAtNode
} from "react-dom";
// import { act } from "react-dom/test-utils";

// import { App } from './App';

let container = null;
describe('Basket', () =>{
    beforeEach(() => {
    // configurar un elemento del DOM como objetivo del renderizado
    container = document.createElement("div");
    document.body.appendChild(container);
    });

    afterEach(() => {
    // limpieza al salir
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    });

    it('Build app', () => {

        expect(container).toBeTruthy();
    })
});
