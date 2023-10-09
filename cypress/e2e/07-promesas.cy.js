describe('Validaciones Implicitas y Explicitas', () => {
    before(() => {
    cy.log("Este tema trata sobre las validaciones")
        });
    beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/')
        });
    // it('Validaciones implicitas', () => {
    //     //Son las validaciones que cyprees recomienda utilizazar con el metodo Should o and
    // cy.get(':nth-child(27) > a').click()
    // cy.get('h3')
    // .should("have.text","Inputs")
    // .and("be.visible")
    
    // });
    // it('Validaciones explicitas', () => {
    //     // Estas validaciones vienen dadas por expct
    //     cy.get(':nth-child(27) > a').click()
    //     cy.get('h3')
    //     expect("Inputs").to.equals("Inputs")
        
    // });
it('Espera que la promesa se resuelva', () => {
    
    let waited = false

    function waitOneSecond () {
        //Devuelve la promesa que se da por resyleta al pasar 1 seg 
        return new Cypress.Promise()
    }





});






    })