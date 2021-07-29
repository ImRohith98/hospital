import React from 'react'
import ClgSvg from '../../../style/svg/clg'
import Doctor from "../../../style/svg/undraw_doctors_hwty.svg"


const DoctorAuthDesign = ({ children }) => {

    return (
        <div className="w-full h-full relative flex" style={{ minHeight: '100vh' }}>
            <div className="fixed z-20 top-0 left-0 px-12 py-6">
                <ClgSvg />
            </div>
            <div className="flex flex-col flex-1 space-y-2 absolute inset-0 w-full md:flex-row md-space-x-4 md:space-y-0">
                <div className="flex flex-col flex-1 items-center justify-center " style={{ minHeight: 400 }}>
                    <img
                        style={{ width: "70%" }}
                        src={Doctor} alt="doctor" />
                    <div className="text-lg pt-12 flex justify-center">
                        You are off to an amazing, rewarding and exciting life.
                    </div>
                </div>
                <div className="flex flex-1 items-center justify-center" style={{ minHeight: 400 }}>
                    <div className="flex flex-col flex-1 items-center justify-center " style={{ minHeight: 400 }}>
                        <div className="rounded-lg p-8" style={{ minHeight: '400', minWidth: '600', background: "#e2f1f9" }}>
                            <div className="flex flex-col flex-initial items-center">
                                {/* <div className="text-2xl bold"> Incognito</div> */}
                                <div className="py-6 ">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorAuthDesign
