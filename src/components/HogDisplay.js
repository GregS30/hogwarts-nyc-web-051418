import React, { Component } from 'react';
import hogs from '../porkers_data.js';
import UUID from 'uuid';
import HogShow from './HogShow';

class HogDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pigId: null
    };
  }

  matchesGreased = (greased) => {
    if (this.props.greased === 'both') {
      return true
    }
    else if (this.props.greased === 'no' && !greased) {
      return true
    }
    else if (this.props.greased === 'yes' && greased) {
      return true
    }
    else {
      return false
    }
  }

  getHogs = () => {
    let search = this.props.search;
    let filteredHogs = hogs.filter(hog => {
      return (hog.name.toLowerCase().includes(search) &&  this.matchesGreased(hog.greased));
    });
    return filteredHogs.map((hog, index) => {
      const hog_url =
        './hog-imgs/' +
        hog.name
          .toLowerCase()
          .split(' ')
          .join('_') +
        '.jpg';

      return (
        <li key={UUID()}>
          <p>{hog.name}</p>
          <img
            id={hog.name}
            src={hog_url}
            onClick={event => this.props.handleImageClick(event)}
          />
        </li>
      );
    });
  };

  render() {
    return <ul>{this.getHogs()}</ul>;
  }
}

export default HogDisplay;
