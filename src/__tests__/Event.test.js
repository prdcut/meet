import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });

  test('render event Title', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  })

  test('render basic event information', () => {
    expect(EventWrapper.find('.name')).toHaveLength(1);
  })

  test('have a show details button', () => {
    expect(EventWrapper.find('.details-btn')).toHaveLength(1);
  })

  test('event details expand on click', () => {
    EventWrapper.setState({ showHideDetails: false })
    EventWrapper.find('.details-btn').simulate('click');
    expect(EventWrapper.state('showHideDetails')).toBe(true);
  })
});