import React, { Component } from 'react'

class Band extends Component {
  handleClick = () => {
    this.props.deleteBand(this.props.band.id)
  }
  render() {
    return (
      <li>
        <div>
          <p>{this.props.band.name}</p>
          <button onClick={this.handleClick}>Delete</button>
        </div>
      </li>
    )
  }
}

export default Band
