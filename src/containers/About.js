import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Aux from '../hoc/Aux/Aux'

class About extends Component {
  componentWillMount() {
    const { pathname } = this.props.location
    console.log(pathname)
    this.props.fetchSpaceXCompanyData(pathname)
  }

  render() {
    return (
      <Aux>
        <div>About SPACEX</div>
      </Aux>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    spaceXinfo: state.spaceXinfo
  }
}

export default connect(
  mapStateToProps,
  actions
)(About)
