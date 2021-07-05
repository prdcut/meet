import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import Event from '../Event';
import EventList from '../EventList';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  let AppWrapper;
  let EventWrapper;
  let EventListWrapper;
  beforeAll(() => {
    AppWrapper = mount(<App />);
    EventListWrapper = mount(<EventList events={mockData} />);
    EventWrapper = mount(<Event event={mockData[0]} />);
  });

  test('An event element is collapsed by default.', ({ given, when, then }) => {
    given('the user hasn’t expanded an event to see it\'s details', () => {
    });

    when('the user opens the app', () => {

    });

    then('the user should see a list of all the events without details', () => {
      expect(EventWrapper.find('.event-details')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('the main page is opened', () => {
    });

    when('the user clicked on expand/more details button on a specific event', () => {
      EventWrapper.find('.details-btn').simulate('click');
    });

    then('the user should see the details of this specific event', () => {
      expect(EventWrapper.find('.event-details')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide it\'s details', ({ given, when, then }) => {
    given('an event\'s details are expanded', () => {
      EventWrapper = mount(<Event event={mockData[0]} />);
      EventWrapper.find(".details-btn").simulate("click");
      EventWrapper.find(".event-details");
    });

    when('the user clicks on the collapse/show less button', () => {
      EventWrapper.find(".details-btn").simulate("click");
    });

    then('the user should no longer see the event\'s details', () => {
      expect(EventWrapper.find(".event-details")).toHaveLength(0);
    });
  });


});