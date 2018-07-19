import React, { Component } from 'react';

class HogSearch extends Component {

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
      <label htmlFor="greased"> Greased? </label>
        <select name="greased" value={this.props.greased} onChange={event => this.props.handleGreased(event)}>
          <option value="yes">yes</option>
          <option value="no">no</option>
          <option value="both">both</option>
        </select>
        <label htmlFor="sort">   Sort by </label>
          <select name="sort" value={this.props.sort} onChange={event => this.props.handleSort(event)}>
            <option value="name">name</option>
            <option value="weight">weight</option>
          </select>


      </div>
    );
  }
}

export default HogSearch;
