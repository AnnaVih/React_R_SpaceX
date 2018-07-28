import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

import Aux from '../hoc/Aux/Aux'

class AboutPage extends Component {
  componentDidMount() {
    const { pathname } = this.props.location
    this.props.fetchCompanyInfo(pathname)
  }

  render() {
    return (
      <Aux>
        <div>About</div>
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  console.log('state:', state)
  return { spaceXInfo: state.spaceXData.companyInfo }
}

const mapDispatchToProps = dispatch => ({
  fetchCompanyInfo: pageName => dispatch(actions.fetchCompanyInfo(pageName))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPage)
