describe('Working with inputs', () => {
    it('activate checkingbox keep me signed in feature', () => {
      cy.visit('http://zero.webappsecurity.com/login.html')

      cy.get ('#user_login').type('username')
      
      cy.get('#user_password').type('password')

      cy.get('[type="checkbox"]').check()
    });
  })