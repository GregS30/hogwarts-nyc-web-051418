import React, { Component } from 'react';

class HogShow extends Component {

  findHog = () => {
      return this.state.hogs.find(function(hog){
        return hog.name === this.props.pigId
      }.bind(this))
    }

  render() {
    const hog = this.findHog()
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
        <img src={hog_url} alt={hog.name}/>
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
  {/*}      <button onClick={this.props.handleClick} className="button">
          Hide
        </button>
  */}    </div>
    );
  }
}

export default HogShow;
