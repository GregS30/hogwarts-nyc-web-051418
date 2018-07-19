import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogDisplay from './HogDisplay'
import HogShow from './HogShow'
import HogSearch from './HogSearch'

class App extends Component {
  constructor() {
    super();

    this.state = {
      page: 'index',
    };
  }

  renderPage = () => {
		switch(this.state.page) {
      case 'index':
        return this.renderDisplay()
      case 'show':
        return this.renderShow()
      default:
  			return null
		}
	}

  renderDisplay = () => {
    return null;
  }

  renderShow = () => {
    return null;
  }

  renderSearch = () => {
    return null;
  }

  render() {
    return (
      <div className="App">
        < Nav />
      {this.renderSearch()}
      {this.renderPage()}
      </div>
    )
  }
}

export default App;
