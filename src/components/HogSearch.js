import React, { Component } from 'react'

class HogSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {

    return (
        <div>
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="text"
          name="search"
          value={this.state.search}
          onChange={this.handleInputChange}
        /></div>
    );
  }
}

export default HogSearch;
