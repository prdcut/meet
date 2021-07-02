import React, { Component } from 'react';

class Event extends Component {
  state = {
    event: {},
    showHideDetails: false,
  };

  handleShowHideButton = () => {
    if (this.state.showHideDetails === true) {
      this.setState({ showHideDetails: false });
    } else {
      this.setState({ showHideDetails: true });
    }
  };

  render() {
    const { event } = this.props;
    return (
      <div className="event">
        <h1 className='name'>{event.summary}</h1>
        <p>{event.start.dateTime}</p>
        <p className='locations'>{event.location}</p>

        {this.state.showHideDetails && (
          <div className='event-details'>
            <h2>About this event:</h2>
            <a href={event.htmlLink}>See Details on Google Calendar</a>
            <p>{event.description}</p>
          </div>
        )}

        <button
          className="details-btn"
          onClick={() => this.handleShowHideButton()}
        >
          {!this.state.showHideDetails ? 'Show Details' : 'Hide Details'}
        </button>
      </div>
    );
  }
}
export default Event;