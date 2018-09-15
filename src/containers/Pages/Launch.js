import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'

class Launch extends Component {
  state = {
    data: []
  }

  render() {
    return (
      <Aux>
        <h1 data={this.state.data}>Launch</h1>
      </Aux>
    )
  }
}

export default Launch
