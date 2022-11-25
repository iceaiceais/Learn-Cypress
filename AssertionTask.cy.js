describe('My First Test', () => {
    it('clicking "type" shows the right heading', () => {
      cy.visit('https://example.cypress.io')
      cy.pause()

      cy.contains('type').click()
      cy.url().should('include', '/commands/actions')
      cy.get('.action-email')
      .type('newemail@gmail.com')
      .should('have.value', 'newemail@gmail.com')
    })
  })