import React, { Component } from 'react';
import hogs from '../porkers_data.js';

class HogShow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const hog = hogs[this.props.pigId];
    const hog_url =
      './hog-imgs/' +
      hog.name
        .toLowerCase()
        .split(' ')
        .join('_') +
      '.jpg';

    return (
      <div>
        <p>
          <button
            onClick={event => this.props.handleReturnClick(event)}
            className="button"
          >
            Return to List
          </button>
        </p>
        <img src={hog_url} />
        <p>{hog.name}</p>
        <p>{hog.specialty}</p>
        <p>
          {
            hog[
              'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
            ]
          }
        </p>
        <p>{hog['highest medal achieved']}</p>
        <button onClick={this.props.handleClick} className="button">
          Hide
        </button>
      </div>
    );
  }
}

export default HogShow;
