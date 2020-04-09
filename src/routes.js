import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import App from './App'
import CreateAccount from './components/containers/createAccount'

export default () => (
    <Router>
        <Switch>
            <Route path="/createUser">
                <CreateAccount />
            </Route>
            <Route path="/">
                <App />
            </Route>
        </Switch>
    </Router>
)