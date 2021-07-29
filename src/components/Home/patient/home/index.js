import React from 'react'
import CanclledSvg from '../../../../style/svg/canclled'
import CompleteSvg from '../../../../style/svg/complete'
import TotalSvg from '../../../../style/svg/total'

const HomePatient = () => {

    return (
        <React.Fragment>
            <div className="p-4 text-2xl">
                Hi Rohith
            </div>
            <div className="m-2 flex justify-around" style={{ background: "#e2f1f9" }}>
                <div className=" flex text-xl p-2 text-center hover:text-yellow-600">
                    <div className="flex flex-col justify-center p-4 animate-spin">
                        <TotalSvg />
                    </div>
                    <div>
                        <div className="p-1" >
                            Total Appointment
                        </div>
                        <div className="text-2xl p-1">
                            3
                        </div>
                    </div>
                </div>
                <div className=" flex text-xl p-2 text-center hover:text-green-600">
                    <div className="flex flex-col justify-center p-4">
                        <CompleteSvg className="text-green-500" />
                    </div>
                    <div>
                        <div className="p-1" >
                            Complted Appointment
                        </div>
                        <div className="text-2xl p-1">
                            3
                        </div>
                    </div>
                </div>
                <div className=" flex text-xl p-2 text-center hover:text-blue-600">
                    <div className="flex flex-col justify-center p-4">
                        <TotalSvg />
                    </div>
                    <div>
                        <div className="p-1" >
                            Upcoming Appointment
                        </div>
                        <div className="text-2xl p-1">
                            3
                        </div>
                    </div>
                </div>
                <div className=" flex text-xl p-2 text-center hover:text-red-600">
                    <div className="flex flex-col justify-center p-4 ">
                        <CanclledSvg className="text-red-500 " />
                    </div>
                    <div>
                        <div className="p-1" >
                            Cancelled Appointment
                        </div>
                        <div className="text-2xl p-1">
                            3
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-around p-4">
                <div className="p-4 text-2xl rounded-2xl hover:shadow-xl	" style={{ background: '#e2f1f9' }}>
                    <div className="p-2 text-center">
                        Dr.Rohith
                    </div>
                    <div className="p-2">
                        ENT
                    </div>
                    <div className="p-2">
                        Date : 23/07/2021 12:00
                    </div>
                    <div className="p-2">
                        Status : Completed
                    </div>
                </div>
                <div className="p-4 text-2xl rounded-2xl hover:shadow-xl" style={{ background: '#e2f1f9' }}>
                    <div className="p-2 text-center">
                        Dr.Rohith
                    </div>
                    <div className="p-2">
                        ENT
                    </div>
                    <div className="p-2">
                        Date : 23/07/2021 12:00
                    </div>
                    <div className="p-2">
                        Status : Completed
                    </div>
                </div>
                <div className="p-4 text-2xl rounded-2xl hover:shadow-xl" style={{ background: '#e2f1f9' }}>
                    <div className="p-2 text-center">
                        Dr.Rohith
                    </div>
                    <div className="p-2">
                        ENT
                    </div>
                    <div className="p-2">
                        Date : 23/07/2021 12:00
                    </div>
                    <div className="p-2">
                        Status : Completed
                    </div>
                </div>
                <div className="p-4 text-2xl rounded-2xl hover:shadow-xl" style={{ background: '#e2f1f9' }}>
                    <div className="p-2 text-center">
                        Dr.Rohith
                    </div>
                    <div className="p-2">
                        ENT
                    </div>
                    <div className="p-2">
                        Date : 23/07/2021 12:00
                    </div>
                    <div className="p-2">
                        Status : Completed
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HomePatient
