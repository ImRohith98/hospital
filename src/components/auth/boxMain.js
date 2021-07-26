import React from 'react'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import ForgetPass from './forgetPass'
import Login from './login'
import Register from './register'

const BoxMain = () => {
    let { url } = useRouteMatch();
    return (
        <React.Fragment>
            <Switch>
                <Route path={`${url}/login`} >
                    <Login />
                </Route>
                <Route path={`${url}/register`} >
                    <Register />
                </Route>
                <Route path={`${url}/forgetpassword`} >
                    <ForgetPass />
                </Route>
                <Redirect from="/patient" to={`/patient/login`} />
            </Switch>
        </React.Fragment>
    )
}

export default BoxMain
