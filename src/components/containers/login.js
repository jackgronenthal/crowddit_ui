import { connect } from 'react-redux'
import Login from '../presentationals/login'
import * as C from '../../constants' 
import * as A from '../../actions'

const mapStateToProps = (store, ownProps) => ({
    modal: store.app.showLoginModal,
    invalidLoginAttempt: store.app.invalidLoginAttempt
})

const mapDispatchToProps = (dispatch) => ({
    toggle: () => dispatch(A.toggleLogin()),
    login: async fields => dispatch(await A.login(fields)),
    dismissLoginAttemptAlert: () => dispatch(A.dismissLoginAlert())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)