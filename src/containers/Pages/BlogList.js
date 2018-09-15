import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'

class BlogList extends Component {
  state = {
    data: []
  }

  render() {
    return (
      <Aux>
        <h1 data={this.state.data}>Blog List</h1>
      </Aux>
    )
  }
}

export default BlogList
