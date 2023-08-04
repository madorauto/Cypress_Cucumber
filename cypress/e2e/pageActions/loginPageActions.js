import loginPageObjects from "../pageObjects/loginPageObjects.js";

class loginPageActions
{
    loginPageLocator=new loginPageObjects();
   
    inputUserName(email)
    {
        cy.get(this.loginPageLocator.emailTextbox)
        .clear()
        .type(email)
    }

    inputPassword(password)
    {
        cy.get(this.loginPageLocator.passwordTextbox)
        .clear()
        .type(password)
    }

    clickLogin()
    {
        cy.get(this.loginPageLocator.loginButton)
        .click()
    }
}
export default loginPageActions;