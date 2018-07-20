import React, { Component } from 'react';
import UUID from 'uuid';
import hogs from '../porkers_data';

class HogDisplay extends Component {

//items.sort((a, b) => a.localeCompare(b, 'fr', {ignorePunctuation: true})); // ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']


  // sortName = (passedHogs) => {
  //     return passedHogs.sort( function(a, b) {
  //       if (nameA < nameB)
  //           return -1
  //       if (nameA > nameB)
  //           return 1
  //       return 0
  //     }
  //   )}

    sortWeight = (passedHogs) => {
      return passedHogs.sort( function(a, b) {
        return a["weight"] - b["weight"]
      })
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
//    let sortedHogs =
    let filteredHogs = hogs.filter(hog => {
      return (hog.name.toLowerCase().includes(search) &&  this.matchesGreased(hog.greased));
    });
    return filteredHogs.map((hog) => {
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
            alt={hog.name}
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
