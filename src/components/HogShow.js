import React, { Component } from 'react'

class HogShow extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {

    return (
      <p>hi
      <button onClick={this.props.handleClick} className="button">Hide</button></p>
    )

  }

}

export default HogShow;
