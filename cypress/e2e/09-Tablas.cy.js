// describe('Tablas estaticas y tablas denamicas', () => {
    // it('Validamos tecto en una tabla estatica', () => {
    //     //Navegado a la web con tablita
    //     cy.visit("https://sqengineer.com/practice-site/practice-tables-selenium/");
    //     //Ubicamos la primera columna
    //     cy.get('#table > tbody > tr :nth-child(1)').each(($elm, index, $list)=>{
    //         //Agarramos el texto de cada elemento en la columna 1
    //     const t = $elm.text();
    //     //Le ponemos que estamos buscando que incluya
    //     if (t.includes("Ranorex")){
    //         //De aca vamos al elemento que que le sigue
    //         cy.get('#table > tbody > tr :nth-child(1)').eq(index).next().then(function(p){
    //             //Tomamos el elemento del texto proximo
    //             const r = p.text() 
    //             //hacenos validacion de texto sobre este elemento
    //             expect(r).to.contains("comercial")
    //         })
            
    //     }


    //     })
    // });
it('Validando tabla dinamica', () => {
    cy.visit('https://chercher.tech/practice/dynamic-table')
    cy.contains('td', "facebook.com")
    .prev()
    .find("input")
    .check()

});

//.prev: Elemento previo que se va a tomar 
//next : comando de cypres que ubica el proximo elemento 
//identificadores de columnas 
//Tr: ubica un ro una fila de la tabla
//td: significa decirle a cypres que tome una columna.
//:nth-child() posicion de la columna
//#table > tbody > tr :nth-child(1)
// each : cada