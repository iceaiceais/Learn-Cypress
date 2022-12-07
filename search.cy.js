import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { when } from 'cypress/types/jquery';

Given ('i successed to login', ()=>{
cy.visit('http://zero.webappsecurity.com/login.html')
cy.get('#user_login').type('username')
cy.get('#user_password').type('password')
cy.contains('sign in').click()

})

And ('open homepage',()=>{
cy.get('#account_summary_tab').should('be.visible')
cy.url().should('equal', 'http://zero.webappsecurity.com/')

})

when ('typing "transfer" on the search box',()=>{
cy.get('#searchTerm').type('transfer').click({enter})

})

Then ('i should see the search result on the page',()=>{
cy.contains('tranfer funds').should('have.value', 'href="/bank/transfer-funds.html"')

})