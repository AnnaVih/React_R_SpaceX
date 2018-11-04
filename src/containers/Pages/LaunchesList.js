import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'

class LaunchesList extends Component {
  state = {
    data: []
  }

  render() {
    const { data } = this.state
    return (
      <Aux>
        <h1 data={data}>Launches List</h1>
      </Aux>
    )
  }
}

export default LaunchesList
