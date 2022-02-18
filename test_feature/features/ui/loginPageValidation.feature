Feature: Facebook Login Page
    @test1
    Scenario: Error Showing if the User Put Wrong Credentials
        Given I open a browser
        When I navigate to the 'login' page
        And I login as :
            | userName | testraisul@gamil.com |
            | password | pass12345            |
        Then the 'Wrong credentials' text displays
        And the 'Invalid username or password' text displays
