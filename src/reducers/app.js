import * as C from '../constants'

const INITIAL = {
    showLoginModal: false,
    validUsername: null,
    cookie: document.cookie.includes('crowddit='),
    username: document.cookie.slice(document.cookie.indexOf('crowddit') + 9),
    invalidLoginAttempt: false
}

export default (state = INITIAL, action) => {
    switch(action.type) {
        case C.TOGGLE_LOGIN:
            return {
                ...state,
                showLoginModal: !state.showLoginModal
            }
        case C.USERNAME_BLUR:
            return {
                ...state,
                validUsername: action.payload.status,
            }
        case C.PASSWORD_BLUR:
            return {
                ...state,
                validPassword: action.payload.status
            }
        case C.COOKIE:
            return {
                ...state,
                cookie: document.cookie.includes('crowddit=')
            }
        case C.CREATE_USER: 
            return {
                ...state,
                username: action.payload.username
            }
        case C.LOGOUT: {
            return {
                ...state,
                cookie: false
            }
        }
        case C.LOGIN: {
            return {
                ...state,
                showLoginModal: false,
                username: action.payload.username,
                cookie: true,
                invalidLoginAttempt: false
            }
        }
        case C.INVALID_LOGIN: {
            return {
                ...state,
                invalidLoginAttempt: true
            }
        }
        case C.DISMISS_LOGIN_ALERT:
            return {
                ...state,
                invalidLoginAttempt: false
            }

        default:
            return state
    }
}