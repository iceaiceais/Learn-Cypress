
/// <reference types="cypress" />
import user from '../fixtures/user.json'
describe('E2E Login Logout', () => {
    it('Login Logout test case', () => {
      
       cy.visit('http://zero.webappsecurity.com/login.html');
      
       cy.fixture('user').then((user) => {
        //this.user=user
        cy.log(user.username);
      })
    })
  
   
    it('login', () => {
        cy.get('#user_login').type(user.username2)
        cy.get('#user_password').type(user.password2)
        
        cy.get('#user_remember_me').check()
        cy.get('[name=submit]').click()
        cy.get('ul.nav-tabs').should('be.visible')
    })
    it('logout', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.url().should('include', 'ndex.html')
        cy.get('#homeMenu > div > strong').should('contain.text', 'Home')
        //cy.get('#homeMenu').should('contain.text', 'HOME')
  
      })    
    })