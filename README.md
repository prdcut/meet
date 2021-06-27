Meet App

This app is going to be a serverless, progressive web application (PWA) with React using a test-driven development technique. It will use the Google Calender API to fetch data about upcoming events in certain locations and allow the user to browse this data.

Features

1. Filter events by city.
2. Show/hide event details.
3. Specify number of events.
4. Use the app when offline.
5. Add an app shortcut to the home screen.
6. View a chart showing the number of upcoming events by city.

User Stories

1. As a user, I should be able to filter events by city, so that I can see the list of events that take place in that city.
2. As a user, I should be able to show and hide an event's details, so that I can learn more about an event when I need more detailed information.
3. As a user, I should be able to specify the number of events that are shown, so that I can tailor the way I scroll through the events to my current device or my needs.
4. As a user, I should be able to use the app when being offline, so that I do not have to rely on having a stable internet connection and am therefore able to use the app in any situation.
5. As a user, I should be able to see event data visualized in a dashboard, so that I can get an overview over certain characteristics of the events quickly and comfortably.

FEATURE 1: FILTER EVENTS BY CITY 

	SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM 			ALL CITIES.	Given user hasn’t searched for any city	When the user opens the app	Then the user should see a list of all upcoming events
	SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.	Given the main page is open	When user starts typing in the city textbox	Then the user should see a list of cities (suggestions) that match what they’ve typed
	SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.	Given the user was typing “Berlin” in the city textbox	And the list of suggested cities is showing	When the user selects a city (e.g., “Berlin, Germany”) from the list	Then their city should be changed to that city (i.e., “Berlin, Germany”)	And the user should receive a list of upcoming events in that city

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

	Scenario 1: An event element is collapsed by default
	Given the use has not opened an event item	When the app displays a list of events	Then the event item will open
	Scenario 2: User can expand an event to see its details
	Given the user has not opened an event item	When the user expands the event item 	Then the user shall be able to see event’s details
	Scenario 3: User can collapse an event to hide its details
	Given the app displays an event’s details	When the user clicks on hide event	Then the event details must collapse 

FEATURE 3: SPECIFY NUMBER OF EVENTS	

	Scenario 1: When user hasn’t specified a number, 32 is the default number
	Given the user did not specify the number of displayed events	When the app displays a list of events	Then the app will display a maximum of 32 events
	Scenario 2: User can change the number of events they want to see
	Given the user has not specify the number of displayed events	When the user specifies the number of desired events	Then the app will display a maximum of events the user specified. 

FEATURE 4: USE THE APP WHEN OFFLINE

	Scenario 1: Show cached data when there’s no internet connection
	Given the app does not have internet connection	When the user is interacting when the app	Then the app should display the cache data
	Scenario 2: Show error when user changes the settings (city, time range)
	Given the app does not have internet connection	When the user changes the city settings	Then the app should display an error message

FEATURE 5: DATA VISUALIZATION

	Scenario 1: Show a chart with the number of upcoming events in each city
	Given the user has selected a city	When the user typed the name of the city	Then the app will display a chart with the number of events taking place in the selected city
