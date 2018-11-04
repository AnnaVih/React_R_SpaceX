import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'

class Launch extends Component {
  state = {
    data: []
  }

  render() {
    const { data } = this.state
    return (
      <Aux>
        <h1 data={data}>Launch</h1>
      </Aux>
    )
  }
}

export default Launch
