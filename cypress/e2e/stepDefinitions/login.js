import loginPageActions from "../pageActions/loginPageActions.js";
import dashboardPageAssertions from "../assertions/dashboardAssertions.js";
import loginPageAssertions from "../assertions/loginAssertions.js";
import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';

const login = new loginPageActions()
const dashboardAssertions = new dashboardPageAssertions()
const loginAssertions = new loginPageAssertions()

Given('User is in login page',()=>{
    cy.visit('/login')
    loginAssertions.validateLoginPage()
})

When('User login with valid {string} and {string}',(email, password)=>{
    login.inputUserName(email)
    login.inputPassword(password)
    login.clickLogin()
})

Then('User will be logged in',()=>{
    dashboardAssertions.validateLogo()
    dashboardAssertions.validateDashboardHeader()
})

Then('{string} will be displayed',(message)=>{
    loginAssertions.validateLoginErrorMessage(message)
})

Then('Page will not be redirected',()=>{
    loginAssertions.validateLoginPage()
})