import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'
import Header from '../../components/Layout/Header/Header'

class HomePage extends Component {
  state = {
    data: []
  }

  render() {
    const { data } = this.state
    return (
      <Aux>
        <Header data={data} />
      </Aux>
    )
  }
}

export default HomePage
