Feature: Specify the number of events

  Scenario: When user has not specified a number 15 is the default number
    Given the user has not specified any number
    When the main page is open
    Then the number of events will be 15

  Scenario: User can change the number of events they want to see
    Given a list of events is showed to the user
    When the user changes the number of events they want to see
    Then the user should see the number of events he chose