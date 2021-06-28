import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    eventsToShow: 32
  }

  handleChange = (event) => {
    const value = event.target.value;
    if (value !== 0) {
      this.setState({
        eventsToShow: value
      });
    } else {
      this.setState({
        eventsToShow: 32
      });
    }
  }

  render() {
    return (
      <div className="NumberOfEvents">
        <label for="events">Events per page:
          <input
            type="number"
            id="number"
            value={this.state.eventsToShow}
            onChange={this.handleChange} />
        </label>
      </div>
    )
  }
}

export default NumberOfEvents;
