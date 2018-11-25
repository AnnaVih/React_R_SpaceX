import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'

class Login extends Component {
  state = {
    data: []
  }

  render() {
    const { data } = this.state
    return (
      <Aux>
        <h1 data={data}>Login</h1>
      </Aux>
    )
  }
}

export default Login
