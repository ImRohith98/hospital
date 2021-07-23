import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ForgetPass from './forgetPass'
import Login from './login'
import Register from './register'

const BoxMain = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/login" >
                    <Login />
                </Route>
                <Route path="/register" >
                    <Register />
                </Route>
                <Route path="/forgetpassword" >
                    <ForgetPass />
                </Route>
            </Switch>
        </React.Fragment>
    )
}

export default BoxMain
