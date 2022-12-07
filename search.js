const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME = '#user_login'
const PASSWORD = '#user_password'
const SIGN_IN = 'input[name="submit"]'
const searchbox = '#searchTerm'

class search{
    static visit() {
        cy.visit(URL)
    }
    static fillUsername(username) {
        cy.get(USERNAME).type(username)
    }
    static fillPassword(password) {
        cy.get(PASSWORD).type(password)
    }
    static signIn() {
        cy.get(SIGN_IN).click()
    }
    
    static searchbox(searchbox) {
        cy.get(searchbox).type('transfer').click({enter})
    }

}
 export default search
 