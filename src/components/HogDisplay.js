import React, { Component } from 'react'
import hogs from '../porkers_data.js'
import UUID from 'uuid'

class HogDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  getHogs = () => {
      return (
        hogs.map((hog) => {
        const hog_url = './hog-imgs/' + hog.name.toLowerCase().split(' ').join('_')
 + '.jpg'

          return (<li><p key={UUID()}>{hog.name}</p>
        <img src={hog_url}/></li>
          )

        }
      ));
  }


  render() {

    return (
      <ul>{this.getHogs()}</ul>
    )






  }

}

export default HogDisplay;
