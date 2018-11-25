import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'

class Blog extends Component {
  state = {
    data: []
  }

  render() {
    const { data } = this.state
    return (
      <Aux>
        <h1 data={data}>Blog Item</h1>
      </Aux>
    )
  }
}

export default Blog
