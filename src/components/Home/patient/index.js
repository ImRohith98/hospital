import React from 'react'
import { useHistory } from 'react-router-dom'
import Icon from "../../../style/svg/favicon.ico"
import LogoutSvg from '../../../style/svg/logout'
import BookPatient from './Book'
import DeletePatient from './Delete'
import UpdatePatient from './update'

const PatientHome = () => {

    let data = localStorage.getItem('userData')
    let r = JSON.parse(data)
    const history = useHistory();

    const [tab, settab] = React.useState("book")
    return (
        <React.Fragment>
            <div className=" flex justify-between px-6 py-3 " style={{ background: '#1d2366', color: '#fff' }}>
                <div className="flex space-x-3" >
                    <img src={Icon} alt='icon' />
                    <div> SUBR</div>
                </div>
                <div className="flex space-x-6">
                    <div>
                        {r?.data?.firstName}
                    </div>
                    <div title="Logout" className="p-1 cursor-pointer " onClick={() => history.push('/')}>
                        <LogoutSvg />
                    </div>
                </div>

            </div>
            <div className="p-4">
                <div className="flex  m-3 text-2xl border rounded-lg" style={{ color: '#121212' }} >
                    {/* <div className="px-8 py-3" onClick={() => settab("home")} style={{ background: tab === "home" && '#e2f1f9' }}>
                        Home
                    </div> */}
                    <div className="px-8 py-3 cursor-pointer" onClick={() => settab("book")} style={{ background: tab === "book" && '#e2f1f9' }}>
                        Book
                    </div>
                    <div className="px-8 py-3 cursor-pointer" onClick={() => settab("update")} style={{ background: tab === "update" && '#e2f1f9' }}>
                        Update
                    </div>
                    <div className="px-8 py-3 cursor-pointer" onClick={() => settab("delete")} style={{ background: tab === "delete" && '#e2f1f9' }}>
                        Delete
                    </div>
                </div>
                <div>
                    {/* {
                        tab === "home" && <HomePatient />
                    } */}
                    {
                        tab === "book" && <BookPatient />
                    }
                    {
                        tab === "update" && <UpdatePatient />
                    }
                    {
                        tab === "delete" && <DeletePatient />
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default PatientHome
