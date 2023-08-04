Feature: Login App
    Scenario: Valid Login User
        Given User is in login page
        When User login with valid "<email>" and "<password>"
        Then User will be logged in
        Examples:
        | email               | password |
        | admin@yourstore.com | admin    |

    Scenario: Invalid Login User
        Given User is in login page
        When User login with valid "<email>" and "<password>"
        Then "<message>" will be displayed
        And Page will not be redirected
        Examples:
        | email                      | password     | message             |   
        | invalidadmin@yourstore.com | admininvalid | invalidBoth         |
        | invalidadmin@yourstore.com | admin        | invalidEmail        |
        | admin@yourstore.com        | admininvalid | invalidPassword     |
