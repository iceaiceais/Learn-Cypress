
describe('Working with fixture and static data', () => {
  it('fixture trial', () => {

      cy.visit('https://www.saucedemo.com/');
      cy.fixture('user').then(user => {
        const username = user.usernames
        const password = user.password
        
        cy.get('#user-name').input('username')
      
        cy.get('#password').input('password')
        cy.get('#login-button').click()
      })

      cy.fixture('user2').then(user => {
        const username = user2.usernames
        const password = user2.password
        
        cy.get('#user-name').input('username')
      
        cy.get('#password').input('password')
        cy.get('#login-button').click()
      cy.get("error-button").should('contain', '"Epic sadface: Sorry, this user has been locked out."')
   

    });
  })
})