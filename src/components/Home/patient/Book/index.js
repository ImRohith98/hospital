import React from 'react'
import { toast } from 'react-toastify'
import Form from '../../../../containers/form'
import { requestApi } from '../../../../utils/request'

const BookPatient = () => {


    const onSubmit = async (form) => {
        let datae = localStorage.getItem('userData')
        let r = JSON.parse(datae)
        let { firstName, gender, mailid, dateOfBirth, doctor, specialization, appdateandtime } = form

        if (!firstName || !gender || !mailid || !dateOfBirth || !doctor || !specialization || !appdateandtime) {
            toast.error("Please enter Alll Details", {
                hideProgressBar: true,
                closeOnClick: true,
            })
        } else {

            let d = await requestApi("http://localhost:5000/patient/book", "POST", { ...form, userid: r?.data.id })
            if (d?.error === true) {
                toast.error(d?.message, {
                    hideProgressBar: true,
                    closeOnClick: true,
                })
            } else {
                toast.success(d?.message, {
                    hideProgressBar: true,
                    closeOnClick: true,
                })
            }
        }
    }


    return (
        <React.Fragment>
            <div className="p-8 flex flex-col space-y-6 w-full">
                <span>  Please fill in the patient details</span>
                <Form
                    onSubmit={(form) => { onSubmit(form) }}
                />
            </div>
        </React.Fragment>
    )
}

export default BookPatient


