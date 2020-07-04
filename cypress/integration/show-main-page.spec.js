Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
});

describe('My First Test', () => {
  it('Does not do much!', () => {
    // expect(true).to.equal(true)
    cy.visit('http://localhost:3000');
    
    // check redirect
    cy.location('pathname').should('eq', '/me');
    
    cy.contains('Matic Gačar');
  })
})
