import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import search from './search'

Given ('i successed to login', ()=>{
search.visit()
search.fillUsername('username')
search.fillPassword('password')
search.signIn()

})

And ('open homepage',()=>{
cy.get('#account_summary_tab').should('be.visible')
cy.url().should('equal', 'http://zero.webappsecurity.com/')

})

when ('typing "transfer" on the search box',()=>{
search.searchbox('transfer')

})

Then ('i should see the search result on the page',()=>{
cy.contains('tranfer funds').should('have.value', 'href="/bank/transfer-funds.html"')

})