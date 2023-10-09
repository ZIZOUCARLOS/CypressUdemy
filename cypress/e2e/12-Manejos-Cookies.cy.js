//Manejos de cookies, como obtener las cookies
// it('Con sesion guardada', () => {
//     cy.session('Carlos', () => {
//     cy.visit('https://the-internet.herokuapp.com/')
//     cy.get(':nth-child(21) > a').click()
//     cy.get('#username').type("tomsmith")
//     cy.get('#password').type("SuperSecretPassword!")
//     // cy.get('form')
//     cy.get('.fa').click()
//     cy.url().should("contain", "/secure")
//     // cy.getCookies().should("have.length", 5)
//     //****************************************************Cookies llamada (De un tipo o nombre) y tiene un valor (Ejemplo X)****************************************************
//     cy.getCookies().should("have.length",5).then((cookies)=>{
//     expect(cookies[0]).to.have.property("name",'optimizelyPendingLogEvents')
//     })

    
// // });
// });

//Validacion de cierta cantidad de Cokkies :  cy.getCokiees().should("have", "lenght", 5)  
//Cookies llamada de tal tipo y tiene un valor x
// should : Deberia
//Then: Entonces
// .to.have.ptoperty : que tebga una propiedad


// it('Con sesion guardada', () => {
//     cy.visit('https://the-internet.herokuapp.com/')
//     cy.get(':nth-child(21) > a').click()
//     cy.get('#username').type("tomsmith")
//     cy.get('#password').type("SuperSecretPassword!")
//     // cy.get('form')
//     cy.get('.fa').click()
//     cy.url().should("contain", "/secure")
//     //*********************************************************************Validar una sola cookies*****************************************************
//     cy.getCookies("optimizelyPendingLogEvents").should("exist")
//     //*************************************************************Validar una cookies con un propiedad ***********************************************************
//     cy.getCookies("optimizelyPendingLogEvents").debug().should("not.have.property","valor","pipi")
// });

//************************************************************Borrar cookies****************************************************************************

//Comando : cy.clear.Cookies()
//Para borra solamente una cookies es el mismo comando pero en singular

// it('Con sesion guardada', () => {
        
//         cy.visit('https://the-internet.herokuapp.com/')
//         cy.get(':nth-child(21) > a').click()
//         cy.get('#username').type("tomsmith")
//         cy.get('#password').type("SuperSecretPassword!")
//         cy.get('.fa').click()
//         cy.url().should("contain", "/secure")
//         cy.getCookies().should("have.length", 5)
//      //****************************************************Cookies llamada (De un tipo o nombre) y tiene un valor (Ejemplo X)****************************************************
//     cy.getCookies().should("have.length",5).then((cookies)=>{
//     expect(cookies[0]).to.have.property("name",'optimizelyPendingLogEvents')
//        })
//        cy.clearCookies()
//     cy.getCookies().should("have.length", 5)
        
//      });
    

      //***************************************SETCOOKIES ********************************************************/
    //Para manipular el sistema, setar el estado de la aplicacion
    //comando : cy.setCookies("nombre de la cookies","valor de la cokiees")
    //Setear sinifica asignar un valor

    it('Con sesion guardada', () => {
        
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get(':nth-child(21) > a').click()
        cy.get('#username').type("tomsmith")
        cy.get('#password').type("SuperSecretPassword!")
        cy.get('.fa').click()
        cy.url().should("contain", "/secure")
        cy.getCookie("cookiesloca").should("not.exist")
        //ejemplo
        cy.setCookie("cookiesloca","Oreo")
        cy.getCookie("cookiesloca").should("have.property","value","Oreo")


    
     });