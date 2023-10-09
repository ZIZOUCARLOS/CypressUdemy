describe('VISITAR PAGINA DE GOOGLE', () => {
    beforeEach(() => {
        cy.visit("https://www.google.com")
    });
it('escribir y tipar un nombre en la barra de busqueda ', () => {
    
    cy.get('#APjFqb')
    .click()
    .type("Carlos Echagarreta")
});

});

//
