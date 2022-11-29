/// <reference types="cypress" />

const { eq } = require("lodash")


describe('working with custom commands', () => {

    it('login flow', () => {
      cy.visit('http://zero.webappsecurity.com/login.html')
      cy.get('#user_login').should ('be.enabled').type('username')
      cy.get('#user_password').should ('be.enabled').type('password')
      cy.get('#user_remember_me').check().should('be.checked')
      cy.get('[name=submit]').click()
      cy.get ('a').contains('Pay Bills'). click()
      cy.get('#sp_payee').select(3).should('have.value', 'wellsfargo')
      cy.get('#sp_account').select(4).should('have.value', '5')
      cy.get('#sp_amount').type('10')
      cy.get('#sp_description').type('testing')
      cy.get('#sp_date').type('2022-11-01')
     
      cy.get('#pay_saved_payees').click()

      
    })

    })
  