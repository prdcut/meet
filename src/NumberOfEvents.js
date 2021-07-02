import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 10
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1) {
      return this.setState({
        numberOfEvents: ''
      });
    } else if (value > 32) {
      return this.setState({
        numberOfEvents: ''
      });
    } else {
      this.setState({
        numberOfEvents: value,
      });
      this.props.updateEvents('', value);
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <label className="events">Events per page</label>
        <input
          type="number"
          className="event-number-input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged} />
      </div>
    );
  }
}

export default NumberOfEvents;