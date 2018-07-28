import React, { Component } from 'react'

class HomePage extends Component {
  state = {
    data: []
  }

  render() {
    return <div data={this.state.data}>Home1</div>
  }
}

export default HomePage
