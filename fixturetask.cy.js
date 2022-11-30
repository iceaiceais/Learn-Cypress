/// <reference types="cypress" />

describe('Working with fixture and static data', () => {
  it('fixture trial', () => {
    
      cy.visit('https://www.saucedemo.com/');
      
      cy.fixture('user').then(data => {
        this.data = data;
      })
      it('standar user' , function(){
        cy.get('#user-name').type(this.data.username)
      
        cy.get('#password').type(this.data.password)
        cy.get('#login-button').click()

      })
      
        it('unmatch password', () => {})
        cy.get('#user-name').type(this.data.username)
      
        cy.get('#password').type(this.data.unmatchpassword)
        cy.get('#login-button').click()
        
        cy.get("error-button").should('contain', 'Epic sadface: Sorry, this user has been locked out.')
   
      
    })
  })
