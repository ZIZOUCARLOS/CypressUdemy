describe('Sessiones y cookies', () => {
    it('Sin sesion guardada', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get(':nth-child(21) > a').click()
        cy.get('#username').type("tomsmith")
        cy.get('#password').type("SuperSecretPassword!")
        // cy.get('form')
        cy.get('.fa').click()
        cy.url().should("contain", "/secure")


    });

    it('Con sesion guardada', () => {
            cy.session('Carlos', () => {
            cy.visit('https://the-internet.herokuapp.com/')
            cy.get(':nth-child(21) > a').click()
            cy.get('#username').type("tomsmith")
            cy.get('#password').type("SuperSecretPassword!")
            // cy.get('form')
            cy.get('.fa').click()
            cy.url().should("contain", "/secure")   
            
        });
    
        
        
    });
});

///.contains("Login").click()