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

    const newKey = 'weight';
    const oldKey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water';

    hogs.forEach((hog) => {
      Object.defineProperty(hog, newKey,
        Object.getOwnPropertyDescriptor(hog, oldKey));
      delete hog[oldKey];
    })

    this.state = {
      hogs: hogs,
      page: 'index',
      search: '',
      pigId: '',
      greased: 'both',
      sort: 'name',
    };

    console.log(this.state.hogs[0])
  }

  renderDisplay = () => {
    return (
      <div>
        <HogSearch handleSearch={this.controlsSetState}
          handleGreased={this.controlsSetState}
          handleSort={this.controlsSetState}
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
        <HogShow
          pigId={this.state.pigId}
          handleReturnClick={this.handleReturnClick}
        />
      </div>
    );
  };

  controlsSetState = event => {
    let name = event.target.name
    this.setState(
      {
        [event.target.name]: event.target.value
      }, () => console.log(name, this.state)
    );
  };

  handleImageClick = event => {
    this.setState({
      pigId: event.target.id,
      page: 'show',
    });
  };

  handleReturnClick = event => {
    this.setState({
      page: 'index',
    });
  };

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
