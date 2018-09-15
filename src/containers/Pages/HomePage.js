import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'

class HomePage extends Component {
  state = {
    data: []
  }

  render() {
    return (
      <Aux>
        <h1 state={this.state.data}>Home</h1>
      </Aux>
    )
  }
}

export default HomePage
