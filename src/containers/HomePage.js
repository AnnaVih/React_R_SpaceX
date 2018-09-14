import React, { Component } from 'react'
import Aux from '../hoc/Aux/Aux'

import HomeHeader from '../components/HomeHeader/HomeHeader'

class HomePage extends Component {
  state = {
    data: []
  }

  render() {
    return (
      <Aux>
        <HomeHeader data={this.state.data} />
      </Aux>
    )
  }
}

export default HomePage
