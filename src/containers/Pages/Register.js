import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'

class Register extends Component {
  state = {
    data: []
  }

  render() {
    return (
      <Aux>
        <h1 data={this.state.data}>Login</h1>
      </Aux>
    )
  }
}

export default Register
