import React from 'react'
import DoctorHome from './doctor'
import PatientHome from './patient'

const HomePage = () => {

    let data = localStorage.getItem('userData')
    let r = JSON.parse(data)

    return (
        <React.Fragment>
            {
                r.module === "doctor" ? (
                    <DoctorHome />
                ) : (
                    <PatientHome />
                )

            }
        </React.Fragment>
    )
}

export default HomePage
