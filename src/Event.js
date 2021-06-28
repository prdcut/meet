import React, { Component } from 'react';

class Event extends Component {
  state = {
    showMore: false
  }

  render() {
    return <div className="EventBox">
      <button className="collapse"></button>
    </div>;
  }
}
export default Event;