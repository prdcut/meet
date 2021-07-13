import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: false,
    infoText: ''

  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true });
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (value === '') {
      this.setState({
        suggestions: [],
        query: '',
        showSuggestions: false,
      })
    };
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        suggestions: [],
        infoText: 'Snap! we can not find the city you are looking for. Please try again!',
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: '',
      });
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
      infoText: ''
    });
    this.props.updateEvents(suggestion, 0);
  };

  render() {
    return (
      <div className="CitySearch">
        <form>
          <label htmlFor='CitySearch'>
            Event Location
          </label>
          <input
            type="text"
            className="city"
            value={this.state.query}
            onChange={this.handleInputChanged}
            onFocus={() => { this.setState({ showSuggestions: true }) }}
            placeholder="Enter Event Location"
          />
        </form>

        <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >{suggestion}</li>
          ))}
          <li key={'all'} onClick={() => this.handleItemClicked("all")}>
            <b>See all cities</b>
          </li>
        </ul>

        <InfoAlert text={this.state.infoText} />

      </div>
    );
  }
}

export default CitySearch