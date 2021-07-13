import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 15,
    errorText: '',
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1) {
      return this.setState({
        numberOfEvents: '',
        errorText: 'Please choose a number greater than 1',
      });
    } else if (value > 32) {
      return this.setState({
        numberOfEvents: '',
        errorText: 'Please choose a number maller than 32',
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: '',
      });
      this.props.updateEvents('', value);
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <label className="events">
          Number of Events
        </label>
        <input
          type="number"
          className="event-number-input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;