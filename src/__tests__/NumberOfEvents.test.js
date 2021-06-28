import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

  let numberFilter;

  beforeAll(() => {
    numberFilter = shallow(<NumberOfEvents />);
  });

  test('render text input', () => {
    expect(numberFilter.find('.NumberOfEvents')).toHaveLength(1);
  });

  test('render  default number of events', () => {
    expect(numberFilter.state('eventsToShow')).toBe(32);
  });

  test('renders text input correctly', () => {
    const stateNumber = numberFilter.state('eventsToShow');
    expect(numberFilter.find('#number').prop('value')).toBe(stateNumber);
  });

  test('change state when input changes', () => {
    const eventObject = { target: { value: 10 } };
    numberFilter.find('#number').simulate('change', eventObject);
    expect(numberFilter.state('eventsToShow')).toBe(10);
  });

});
