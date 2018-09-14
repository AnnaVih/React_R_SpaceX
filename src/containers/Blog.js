import React, { Component } from 'react'
import Aux from '../hoc/Aux/Aux'

class Blog extends Component {
  state = {
    data: []
  }

  render() {
    return (
      <Aux>
        <h1 data={this.state.data}>Blog Item</h1>
      </Aux>
    )
  }
}

export default Blog
