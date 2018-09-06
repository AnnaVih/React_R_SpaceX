import React, { Component } from 'react'
import Aux from '../hoc/Aux/Aux'

class LaunchesList extends Component {
  state = {
    data: []
  }

  render() {
    return (
      <Aux>
        <h1 data={this.state.data}>Launches List</h1>
      </Aux>
    )
  }
}

export default LaunchesList
