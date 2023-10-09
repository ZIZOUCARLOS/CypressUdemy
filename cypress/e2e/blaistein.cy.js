describe('Prueba de Regresion blaistein', () => {
    before(() => {
        cy.log("Ambiente QA que se va a utilizar, para realizar las pruebas: https://staging--blaistenqaio.myvtex.com/");
    });
    after(() => {
        cy.log("Esta codigo se va a utilizar para realizar las pruebas checkout")
    });
beforeEach(() => {
    cy.visit("https://blaistenqaio.myvtex.com/_v/segment/admin-login/v1/login?returnUrl=%2F%3F")
    cy.viewport(1440, 900)
});
it('Entrar al WS', () => {
    cy.get("#email").click()
    .type("carlosorlando.echagarreta@externos-ar.cencosud.com");
    cy.get(".vtex-button__label").click()
    // comando de espera wait
    cy.wait(2000)
    cy.get(".vtex-styleguide-9-x-input").click()
    .type("Mayra1980")
    cy.get(".vtex-button__label").click();
    

});

});

//npx cypress open