import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'

class Rocket extends Component {
  state = {
    data: []
  }

  render() {
    const { data } = this.state
    return (
      <Aux>
        <h1 data={data}>Rocket</h1>
      </Aux>
    )
  }
}

export default Rocket
