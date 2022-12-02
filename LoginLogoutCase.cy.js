/// <reference types="cypress" />

describe('E2E Login Logout', () => {
    it('Login Logout test case', () => {
      
       cy.visit('http://zero.webappsecurity.com/login.html');
       
       cy.fixture('user').then(data => {
        this.data = data;
      })
   
    it('login', () => {
        cy.get('#user_login').type(this.data.username2)
        cy.get('#user_password').type(this.data.password2)
        
        cy.get('#user_remember_me').check()
        cy.get('[name=submit]').click()
        cy.get('ul.nav-tabs').should('be.visible')
    })
    it('logout', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.get('#homeMenu').should('contain.text', 'HOME')
  
      })    
})
})