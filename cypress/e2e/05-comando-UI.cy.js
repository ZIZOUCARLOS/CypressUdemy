describe('Comandos mas utilizados para la Interfaz de Usuario', () => {
before(() => {
    cy.log("Esta es la pagina que se va a utilizar para realizar las pruebas de UI")
});
beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/');

});
//     it('Ejemplo de click', () => {
//         //Siempre se debe encadenar el elemento, puedes llamar al Web Elemet por clase, ID o Nombre con contains
//         cy.contains("Add/Remove Elements").click()
//         cy.get("button").click()
//         cy.contains("Delete").click()
// });
    // it('EJEMPLO DE ESCRITURA', () => {
    //    cy.contains('Form Authentication').click()
    //   cy.get('#username').type("tomsmith")
    //   cy.get('#password').type("SuperSecretPassword!")
    //   cy.get('.fa').click();

    // });
    // *****************************************************************************Checkboxes*****************************************************************************
    // it('CheckBox', () => {
    //     cy.contains('Checkboxes').click()
    //     cy.get('#checkboxes > :nth-child(1)').check()
    //     cy.get('#checkboxes > :nth-child(3)').uncheck()
    // });
    // *******************************************************************************************Dropdown**********************************************************************
    // it('Ejemplo de DROPDOWN', () => {
    //     cy.contains('Dropdown').click();
    //     //El select no da la opcion de pasar el nombre o la opcion se posision de index 1 o 2 
    //     cy.get('#dropdown').select("2")
    // 
    // ****************************************************************************Hovers*****************************************************************************
    // it('Hover sobre el elelemnto', () => {
    //     // PARA REALIZAR UN HOVER SE DEBE D FORZAR EL ELEMENTO CON EL SIGUENTE COMANDO.clicl({force:true})
    //     cy.contains('Hovers').click()
    //     cy.get("#content > div > div:nth-child(4) > div > a").click({force:true})
    //     // si el elemento tiene que ser vicible se debe de colocar la siguente comando .invoke("show").should

    // ******************************************************************Ventana-Emergente******************************************************************************** 
    it('Ventana emergente-Hacer click-Right-click', () => {
        cy.contains('Context Menu').click()
        cy.get('#hot-spot').rightclick();
        //Otra manera de invocar la alerta de mensaje emergente es : 
        //Triger = Desencadenar
        //Invoke= invocar
        cy.get('#hot-spot').invoke("trigger","contextmenu");
        // ON se utiliza para indicarle a cypress que cuando pase una accion haga lo siguente : 
        cy.on("window:alert",(alert)=>{
            expect(alert).to.equal("You selected a context menu")
        })

    });
});
