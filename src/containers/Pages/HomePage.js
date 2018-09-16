import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'
import Header from '../../components/Layout/Header/Header'

class HomePage extends Component {
  state = {
    data: []
  }

  render() {
    return (
      <Aux>
        <Header data={this.state.data} />
      </Aux>
    )
  }
}

export default HomePage
