import React, { Component } from 'react';

class HogSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: ''
    };
  }

  render() {
    return (
      <div>
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="text"
          name="search"
          onChange={event => this.props.handleSearch(event)}
        />
      </div>
    );
  }
}

export default HogSearch;
