import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32
  }

  handleChange = (event) => {
    const value = event.target.value;
    if (value !== 0) {
      this.setState({
        numberOfEvents: value
      });
    } else {
      this.setState({
        numberOfEvents: 32
      });
    }
  }

  render() {
    return (
      <div className="NumberOfEvents">
        <label className="events">Events per page:</label>
        <input
          type="number"
          className="event-number-input"
          value={this.state.numberOfEvents}
          onChange={this.handleChange} />

      </div>
    )
  }
};

export default NumberOfEvents;