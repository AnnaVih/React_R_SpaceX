import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Navigation from '../../components/Layout/Navigation/Navigation'
import * as actions from '../../redux/actions/index'

const mapStateToProps = state => ({
  auth: state.authenticate.isAuth
})

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(actions.handleLogOut())
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navigation)
)
