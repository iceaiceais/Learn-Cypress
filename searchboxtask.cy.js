/// <reference types="cypress" />


describe('working with searching box element', () => {

    it('searchbox script', () => {

      cy.visit('http://zero.webappsecurity.com')
        cy.get('#searchTerm').type('online{enter}')
        cy.get('h2').should('contain.text','Search Result')
        cy.get(':nth-child(4) > :nth-child(1) > a').should('contain.text', 'Zero - Free Access to Online Banking')
        cy.get(':nth-child(2) > a').should('contain.text', 'Zero - Online Statements')
        
    })
 
    })