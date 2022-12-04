/// <reference types="cypress" />
import user from '../fixtures/user.json'
describe('all process', () => {
    

    it('add to chart flow', () => {
        cy.visit('www.saucedemo.com')

        cy.get('#user-name').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="product_sort_container"]').should('be.enabled')
})

      it('make payment with custom commands', ()=>{
        cy.login2('username', 'password')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('user1')
        cy.get('[data-test="lastName"]').type('admin1')
        cy.get('[data-test="postalCode"]').type('11620')
        cy.get('[data-test="continue"]').click()
        cy.url().should('include', 'checkout-step-two.html')
        cy.get('[data-test="finish"]').click
      })
      
    

   it('negative case with custom commands', ()=> {
    cy.visit('www.saucedemo.com')
    cy.fixture('user').then((user) => {
      cy.log(user.username);
    }) 
      cy.get('#user-name').type(user.username2)
      cy.get('[data-test="password"]').type(user.password)
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service' )
   })

   it('logout flow with custom commands', ()=> {
    cy.login2('username', 'password')
    cy.url().should('include', 'inventory.html')
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click
    })
    
})