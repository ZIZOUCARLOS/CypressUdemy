describe('Utilidades para debuggin con Cypress', () => {
    
    //cy.log: se utiliza para mostrar informacion, utiliza string
    //pause comando para pausar alguna ejecucion o accion en cypress
    //comando.cy.debug() Se utiliza para obterner iformacion, debe de ir encadenado a un elemento web, muestra  informacion de los elemento web 
});it('cy.log', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.log("Utiliza el nombre");
    cy.get("#username").type("tomsmith").pause();
    cy.log("Escribe la clave");
    cy.get("#password").debug().type("SuperSecretPassword!");
    cy.get('.radius').click
});
//GET = siempre se encadena una funcion con el elemento que se toma, puede pedir un loqueitor  o alias
//  un alias es un loqueitor que se le coloca un nombre para ser reutilizable.
//as significa como 
// se le puede pasar opciones con comando log

 //should :debería
//             //have: tener
//             //length : longitud 


//************************************************************* */ find*********************************************************//
// similar al get
//sirve para ubicar webelement, encuentra un elemento que esta dependiente de otro
//actua en conjunto con un get 
//no funciona con alias 


//./node_modules/.bin/cypress open

