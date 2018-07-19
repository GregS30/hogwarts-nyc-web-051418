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

  getHogs = () => {
    let search = this.props.search;
    let filteredHogs = hogs.filter(hog => {
      return hog.name.toLowerCase().includes(search);
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
            id={index}
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
