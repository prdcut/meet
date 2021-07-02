import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.event-number-input')).toHaveLength(1);
  });

  test('renders text input correctly', () => {
    const stateNumber = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.event-number-input').prop('value')).toBe(stateNumber);
  });

  test('change state when input changes', () => {
    NumberOfEventsWrapper.setState({
      numberofEvents: 5
    });
    const eventObject = { target: { value: 2 } };
    NumberOfEventsWrapper.find('.event-number-input').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(2);
  });

});