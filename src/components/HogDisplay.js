import React, { Component } from 'react'
import hogs from '../porkers_data.js'
import UUID from 'uuid'
import HogShow from './HogShow'

class HogDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pigId: null
    }
  }

  getHogs = () => {
      return (
        hogs.map((hog, index) => {
        const hog_url = './hog-imgs/' + hog.name.toLowerCase().split(' ').join('_')
 + '.jpg'

          return (<li key={UUID()}><p>{hog.name}</p>
        <img id={index} src={hog_url} onClick={this.handleImageClick}/></li>
          )

        }
      ));
  }

  handleImageClick = (event) => {
    console.log("clicked image")
    this.setState({
      pigId: event.target.id,
      page: 'show',
    }, () => console.log(this.state.pigId));
  }


  render() {

    return (
      <ul>{this.getHogs()}</ul>
    )






  }

}

export default HogDisplay;
