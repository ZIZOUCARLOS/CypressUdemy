describe('Pruebas sobre UI', () => {
    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/")
    });
    // it('Ejemplo de Esperas', () => {
    //     cy.wait(10000);
    //     cy.contains("Challenging DOM").click();
    // });
    // // it('Nueva Pestaña', () => {
    // //     cy.contains("Multiple Windows").click();
    // //     cy.contains("Click Here").invoke("removeAttr","target").click();
    // //     cy.contains("New Window").should("have.text", "New Window");
    // // });

    // // it('Shadow DOM', () => {
    // //     cy.contains("shadow DOM").click()
    // //     cy.get()
    // // });
    // it('Primer y ultimo Elemento', () => {
    //     cy.contains("Dynamic Content").click()
    //     cy.get("img").should("be.visible")
    // });
//Para validar una imagen y traer un elemento los con (first=primera, last=ultima,eq(2)=valida la imagen del medio)
    // it('Primer y ultimo Elemento', () => {
    //     cy.contains("Dynamic Content").click()
    //     cy.get("img").eq(2).should("be.visible")
    // });
//Pdre e hijo
    it('Padre e hijos', () => {
        cy.contains("Dynamic Content").click()
        cy.get(':nth-child(4) > .large-2 > img').parent()//parent devuelve el padre del elemento
        cy.get('.example > :nth-child(7)').children()//devuelve el hijo del elemento que se le pasa anteriormente
    });
    //parent trae el padre web element
    //children trae el hijo del web element


    
    
});
//should :debería
//have: tener
//length : longitud 
//hidden : oculto
//be: ser
//then : Entonces 

//wait : tarda en aparecer, no es recomendable utilizar, pero como tester en algunos oportunidades se debe de utilizar por si se tarda un webelement en aparecer, se expresa en milisegundos.
//.invoke("removeAttr","target") se utiliza para remover el target en el webelemento, que remueva la ejecucion en otra ventana(que no abra otra ventana)
//shadow se encuentra dentro del elemento DOM, es cuando esta aislado fuera del arbol, se encuentra escondido.
//contenido dinamico


//npx cypress open