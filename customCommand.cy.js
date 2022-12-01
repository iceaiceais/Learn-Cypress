/// <reference types="cypress" />


describe('working with custom commands', () => {

    it('custom command', () => {

      cy.login('username', 'password')
      cy.get ('a').contains('Pay Bills'). click()
      cy.get('#sp_payee').select(3).should('have.value', 'wellsfargo')
      cy.get('#sp_account').select(4).should('have.value', '5')
      cy.get('#sp_amount').type('10')
      cy.get('#sp_description').type('testing')
      cy.get('#sp_date').type('2022-11-01')
     
      cy.get('#pay_saved_payees').click()

    })

    })
  