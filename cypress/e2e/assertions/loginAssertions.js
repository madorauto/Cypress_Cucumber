import loginPageObjects from "../pageObjects/loginPageObjects.js";

class loginPageAssertions
{
    loginPageLocator = new loginPageObjects

    validateLoginPage()
    {
        cy.url()
        .should('contains','/login')
    }
    validateLoginErrorMessage(message)
    {   
        cy.get(this.loginPageLocator.errorMessage)
            .should('be.visible')
            .and('be.exist')
            .and('contain','Login was unsuccessful. Please correct the errors and try again.')

        if(message == 'invalidPassword')
        {
            let loginErrorMessage = 'The credentials provided are incorrect';
            cy.get(this.loginPageLocator.errorMessage)
            .should('contain',loginErrorMessage)
        }
        else
        {
            let loginErrorMessage = 'No customer account found';
            cy.get(this.loginPageLocator.errorMessage)
            .should('contain',loginErrorMessage)
        }

    }

}
export default loginPageAssertions;