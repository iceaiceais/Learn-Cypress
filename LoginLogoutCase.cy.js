/// <reference types="cypress" />

describe('E2E Login Logout', () => {
    it('Login Logout test case', () => {
      
       cy.visit('http://zero.webappsecurity.com/login.html/');
       
       cy.fixture('credentials').then(credentials => {
      this.credentials = credentials;
      })
   
    it('login', () => {})
        cy.get('#user_login').type(this.credentials.username)
        cy.get('#user_password').type(this.credentials.password)
        
        cy.get('#user_remember_me').check()
        cy.get('[name=submit]').click()
        cy.get('ul.nav-tabs').should('be.visible')

    it('logout', () => {})
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.get('#homeMenu').should('contain.text', 'HOME')
  
      })    
})