Feature: Login Functionality Check

    I want to login into the site

    Scenario: Login with valid credentials
        Given User navigate to the Website
        When User enter valid username and password
        When User clicks on login button
        Then validate the title after login