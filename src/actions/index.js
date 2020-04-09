import * as C from '../constants'
import querystring from 'query-string'

export let toggleLogin = () => {
    return { type: C.TOGGLE_LOGIN }
}

export let usernameBlur = async payload => {

    let url = "http://localhost:3001/db/checkUsername?" + querystring.stringify({username: payload})
    
    let options = {
        method: 'GET'
    }

    let response = await fetch(url, options)
        .then(response => response.json())
        .then(json => json)
        .catch(err => console.log(err))
    if(response && response.status) {
        return {type: C.USERNAME_BLUR, payload: { status: response.status == 'success' ? true : false }}
    } else {
        return {type: C.USERNAME_BLUR, payload: { status: false }}
    }
} 

export let passwordBlur = async payload => {

    let url = "http://localhost:3001/db/checkPassword?" + querystring.stringify({password: payload})
    
    let options = {
        method: 'GET'
    }

    let response = await fetch(url, options)
        .then(response => response.json())
        .then(json => json)
        .catch(err => console.log(err))

    if(response && response.status) {
        return {type: C.PASSWORD_BLUR, payload: { status: response.status == 'success' ? true : false }}
    } else {
        return {type: C.PASSWORD_BLUR, payload: { status: false }}
    }
}

export let createUser = async () => {
    
    let username = document.getElementById("username-input").value.trim()
    let password = document.getElementById("password-input").value.trim() 

    console.log(username, password)

    let url = "http://localhost:3001/db/createUser?" + querystring.stringify({username, password})
    
    let options = {
        method: 'GET'
    }

    let response = await fetch(url, options)
        .then(response => response.json())
        .then(json => json)
        .catch(err => console.log(err))

    console.log(response)
    if(response.status == 'success') {
        console.log("setting cookie")
        document.cookie = 'crowddit=' + response.username
        document.location = 'http://localhost:3000/'
        return {type: C.CREATE_USER, payload: { status: true, username }}
    } else {
        return {type: C.CREATE_USER, payload: { status: false, username }}
    }

}

export let cookie = () => ({
    type: C.COOKIE
})

export let logout = () => {
    document.cookie = 'crowddit' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    return { type: C.LOGOUT }
}

export let login = async ({ username, password }) => {

    let url = "http://localhost:3001/db/login?" + querystring.stringify({username, password})

    let options = {
        method: 'GET'
    }

    let response = await fetch(url, options)
        .then(res => res.json())
        .then(json => json)
    
    console.log("response", response)

    if(response.status == "success") {
        return { type: C.LOGIN, payload: { username: response.username } }
    } else {
        return { type: C.INVALID_LOGIN }
    }
}

export let dismissLoginAlert = () => ({ type: C.DISMISS_LOGIN_ALERT })