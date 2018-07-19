import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import HogDisplay from './HogDisplay';
import HogShow from './HogShow';
import HogSearch from './HogSearch';

class App extends Component {
  constructor() {
    super();

    this.state = {
      page: 'index',
      search: '',
      pigId: '',
      greased: 'both',
      sort: 'name',
    };
  }

  renderPage = () => {
    switch (this.state.page) {
      case 'index':
        return this.renderDisplay();
      case 'show':
        return this.renderShow();
      default:
        return null;
    }
  };

  renderDisplay = () => {
    return (
      <div>
        <HogSearch handleSearch={this.handleSearchChange}
          handleGreased={this.handleGreased}
          handleSort={this.handleSort}
          greased={this.state.greased}
          sort={this.state.sort}
        />
        <HogDisplay
          search={this.state.search}
          handleImageClick={this.handleImageClick}
          greased={this.state.greased}
        />
      </div>
    );
  };

  renderShow = () => {
    return (
      <div>
{/*         <HogSearch handleSearch={this.handleSearchChange} />
*/}
        <HogShow
          pigId={this.state.pigId}
          handleReturnClick={this.handleReturnClick}
        />
      </div>
    );
  };

  handleSearchChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => console.log('App', this.state)
    );
  };

  handleGreased = event => {
    this.setState(
      {
        greased: event.target.value
      }
    );
  };

  handleSort = event => {
    this.setState(
      {
        sort: event.target.value
      }
    );
  };

  handleImageClick = event => {
    console.log('clicked image');
    this.setState(
      Object.assign({}, this.state, {
        pigId: event.target.id,
        page: 'show'
      }),
      () => console.log(this.state)
    );
  };

  handleReturnClick = event => {
    this.setState(
      Object.assign({}, this.state, {
        pigId: event.target.id,
        page: 'index'
      }),
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <div className="App">
        <Nav />
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
