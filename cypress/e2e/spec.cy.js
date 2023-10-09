describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com')
    cy.get("#APjFqb").click()
    .type("Carlos Echagarreta")
    .click(".aajZCb > .lJ9FBc > center > .gNO89b")
    
  })
})