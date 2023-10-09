//funcion que se pasa como argumento, sirve para controlar las acciones que se van a realizar primero

const home = new FreeRangeHome

describe('Ejemplo de POO en la Web Range Testers', () => {
    beforeEach(() => {
        home.navigateToHome()
    });
    it('El Boton de ampezar aprender exite', () => {
        home.empezarButtom().should("exite")
        home.empoezarButtom().click()
    });



});