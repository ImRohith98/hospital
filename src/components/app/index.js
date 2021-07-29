import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DoctorAuth from '../auth/doctor'
import OptionWindow from '../optionwindow'
import Auth from '../auth'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from '../Home'
import { requestApi } from '../../utils/request'



const AppMain = () => {


    const getData = async () => {
        const data = await requestApi("http://localhost:5000/auth", "GET")
        console.log(data)
    }

    React.useEffect(() => {
        getData()
    }, [])


    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" >
                        <OptionWindow />
                    </Route>
                    <Route path="/doctor" >
                        <DoctorAuth />
                    </Route>
                    <Route path="/patient" >
                        <Auth />
                    </Route>
                    <Route path="/home" >
                        <HomePage />
                    </Route>
                </Switch>
                <ToastContainer />
            </div>
        </Router>
    )
}

export default AppMain
