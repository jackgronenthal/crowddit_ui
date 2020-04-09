import { connect } from 'react-redux'
import createAccount from '../presentationals/createAccount'
import * as C from '../../constants' 
import * as A from '../../actions'

const mapStateToProps = (store, ownProps) => ({
    validUsername: store.app.validUsername,
    validPassword: store.app.validPassword
})

const mapDispatchToProps = (dispatch) => ({
    usernameBlur: async e =>  dispatch(await A.usernameBlur(e)),
    passwordBlur: async e => dispatch(await A.passwordBlur(e)),
    createUser: async e => { dispatch(await A.createUser()); dispatch(A.cookie()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(createAccount)