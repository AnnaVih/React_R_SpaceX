import React, { Component } from 'react'
import Aux from '../hoc/Aux/Aux'

class RocketsList extends Component {
  state = {
    data: []
  }

  render() {
    return (
      <Aux>
        <h1 data={this.state.data}>Rockets List</h1>
      </Aux>
    )
  }
}

export default RocketsList
