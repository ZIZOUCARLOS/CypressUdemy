describe('Pruebas de API con Cypress', () => {
    it('El enpoint Post responde con status 200', () => {
        //El 
        cy.visit('https://jsonplaceholder.typicode.com/');
        cy.request({
            method: '',
            url: '',
            headers: { 'Accept-Language': 'en-us', },
        });
    });
});
//tequest : Solicitud
//get : Obtenernpx