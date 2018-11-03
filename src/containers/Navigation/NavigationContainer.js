import { connect } from 'react-redux'
import Navigation from '../../components/Layout/Navigation/Navigation'
import * as actions from '../../redux/actions/index'

const mapStateToProps = state => ({
  auth: state.authenticate.isAuth
})

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(actions.handleLogOut())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)
