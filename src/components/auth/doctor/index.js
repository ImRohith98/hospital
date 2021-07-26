import React from 'react'
import { Redirect, Route, Switch, useRouteMatch, } from 'react-router-dom'
import ForgetPass from '../forgetPass'
import Register from '../register'
import DoctorAuthDesign from './doctorAuth'
import Login from '../login'
import HomePage from '../../Home'
import Header from '../../header'

const DoctorAuth = () => {
    let { url } = useRouteMatch();

    return (
        <React.Fragment>
            <DoctorAuthDesign>
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
                    <Route path={`${url}/home`} >
                        <Header />
                        <HomePage />
                    </Route>
                    <Redirect from="/doctor" to={`/doctor/login`} />
                </Switch>
            </DoctorAuthDesign>
        </React.Fragment>
    )
}

export default DoctorAuth
