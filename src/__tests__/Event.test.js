import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import EventList from '../EventList';
import { mockData } from '../mock-data';

describe('<EventList /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />)
  });

  test('render event list', () => {
    const EventListWrapper = shallow(<EventList events={mockData} />);
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
  });

  test('render the event details via showMore button', () => {
    expect(EventWrapper.find('.collapse')).toHaveLength(1);
  });

  test('showMore button initial state should be false on render', () => {
    expect(EventWrapper.state('showMore')).toBe(false);
  });

  test('showMore button state is true to render more details simulating a click', () => {
    const changeState = EventWrapper.setState({ showMore: true });
    EventWrapper.find('.collapse').simulate('click', changeState);
    expect(EventWrapper.state('showMore')).toBe(true);
  });

  test('showMore button state is false to render less details simulating a click', () => {
    const changeState = EventWrapper.setState({ showMore: false });
    EventWrapper.find('.collapse').simulate('click', changeState);
    expect(EventWrapper.state('showMore')).toBe(false);
  })
});