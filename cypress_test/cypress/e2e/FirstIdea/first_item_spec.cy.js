describe('My first test', () => {
  it('Visits the demo site and checks the page title', () => {
    cy.visit('https://demoqa.com/')
    cy.title().should('include', 'Demo Site')
  })
})
