Feature: Show/hide an event's details

  Scenario: An event element is collapsed by default.
    Given the user hasn’t expanded an event to see it's details
    When the user opens the app
    Then the user should see a list of all the events without details

  Scenario: User can expand an event to see its details
    Given the main page is opened
    When the user clicked on expand/more details button on a specific event
    Then the user should see the details of this specific event

  Scenario: User can collapse an event to hide it's details
    Given an event's details are expanded
    When the user clicks on the collapse/show less button
    Then the user should no longer see the event's details