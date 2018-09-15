import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'

class Rocket extends Component {
  state = {
    data: []
  }

  render() {
    return (
      <Aux>
        <h1 data={this.state.data}>Rocket</h1>
      </Aux>
    )
  }
}

export default Rocket
