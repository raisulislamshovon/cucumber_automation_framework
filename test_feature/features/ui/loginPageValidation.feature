Feature: Facebook Login Page
    @test1
    Scenario: Error Showing if the User Put Wrong Credentials
        Given I open a browser
        When I navigate to the 'login' page
        And I login as :
            | userName | testraisul@gamil.com |
            | password | pass12345            |
        Then the 'Log In' text displays
        And the 'Find your account and log in.' text displays
