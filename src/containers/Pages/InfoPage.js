import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/index'

import Aux from '../../hoc/Aux/Aux'

class AboutPage extends Component {
  componentDidMount() {
    const {
      location: { pathname }
    } = this.props
    const { fetchCompanyInfo } = this.props
    fetchCompanyInfo(pathname)
  }

  render() {
    return (
      <Aux>
        <h1>About</h1>
      </Aux>
    )
  }
}

const mapStateToProps = state => ({
  spaceXInfo: state.spaceXData.companyInfo,
  error: state.spaceXData.error,
  loading: state.spaceXData.loading
})

const mapDispatchToProps = dispatch => ({
  fetchCompanyInfo: pageName => dispatch(actions.fetchCompanyInfo(pageName))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPage)
