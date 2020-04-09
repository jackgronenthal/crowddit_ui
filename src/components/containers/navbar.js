import { connect } from 'react-redux'
import NavigationBar from '../presentationals/navbar'
import * as C from '../../constants' 
import * as A from '../../actions'

const mapStateToProps = (store, ownProps) => ({
    test: store.app.init_data,
    cookie: store.app.cookie,
    username: store.app.username
})

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => { dispatch(A.toggleLogin()) },
        logout: () => { dispatch(A.logout()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)