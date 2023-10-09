describe('Jqery y Cypress', () => {
    it('Haciendo una operacion con QJQery', () => {
        // es una llamada sincrona, se llama por $ o $$ y el get es asincrono, 
        // cy.$("css-selector")
        const elemento = $("Elemento")
        elemento.click()
    });
});



//JQery es sincrona : devuelve llamada inmeditamente y puede trabajar con contastes
//GET : es asincrono : Espera por promesa, por la llamada, el get no trabaja con contastes
//$ ubica elementos mas alla del Dom
//$$ ubuca elementos solamente en el Dom