import React, { Component } from 'react'

class Home extends Component {
  state = {
    data: []
  }

  render() {
    return <div data={this.state.data}>Home1</div>
  }
}

export default Home
