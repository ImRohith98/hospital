import React from 'react'
import Icon from "../../../style/svg/favicon.ico"
import BookPatient from './Book'
import HomePatient from './home'
import UpdatePatient from './update'

const PatientHome = () => {

    const [tab, settab] = React.useState("home")
    return (
        <React.Fragment>
            <div className=" flex justify-between px-6 py-3 " style={{ background: '#1d2366', color: '#fff' }}>
                <div className="flex space-x-3" >
                    <img src={Icon} alt='icon' />
                    <div> SUBR</div>
                </div>
                <div>
                    account
                </div>
            </div>
            <div className="p-4">
                <div className="flex  m-3 text-2xl border rounded-lg" style={{ color: '#121212' }} >
                    <div className="px-8 py-3" onClick={() => settab("home")} style={{ background: tab === "home" && '#e2f1f9' }}>
                        Home
                    </div>
                    <div className="px-8 py-3" onClick={() => settab("book")} style={{ background: tab === "book" && '#e2f1f9' }}>
                        Book
                    </div>
                    <div className="px-8 py-3" onClick={() => settab("update")} style={{ background: tab === "update" && '#e2f1f9' }}>
                        Update
                    </div>
                </div>
                <div>
                    {
                        tab === "home" && <HomePatient />
                    }
                    {
                        tab === "book" && <BookPatient />
                    }
                    {
                        tab === "update" && <UpdatePatient />
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default PatientHome
