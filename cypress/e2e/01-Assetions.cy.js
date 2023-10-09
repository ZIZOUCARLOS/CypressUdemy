// Describe el caso de prueba
describe('Home Page de www.freerangetesters.com', () => {
    beforeEach(() => {
        cy.visit ("https://www.freerangetesters.com/")
        cy.viewport(1440, 900)
    });

it('should have title', () => {
cy.title().should("include", "Free Range Testers")
//cy.get('#comp-l02x1m8d1label').click();
    
}); 

//     // it('Hay 9 elementos con el boton para ver mas ', () => {
//             cy.get("")
//             //should :debería
//             //have: tener
//             //length : longitud 
//             //.each : recorrer algun valor 
//             //then : entonces
//     //     cy.get('[data-testid="linkElement"] > .StylableButton2545352419__container').should("have.length")//
       // 
        
//     // });

});

//./node_modules/.bin/cypress open

// //import cypress from "cypress";

// cypress.on("uncaught:exception",(err, runnable)=> {
//     return false
// })

// require('cypress-xpath');

// import './commands'
// cypress.on('uncaught:exception', (err, runnable)=> {
//     return false 
// })
// require('cypress-xpath');


