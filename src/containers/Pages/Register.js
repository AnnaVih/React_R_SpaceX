import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'

class Register extends Component {
  state = {
    data: []
  }

  render() {
    const { data } = this.state
    return (
      <Aux>
        <h1 data={data}>Register</h1>
      </Aux>
    )
  }
}

export default Register
