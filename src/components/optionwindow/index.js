import React from 'react'
import { useHistory } from 'react-router-dom';
import ClgSvg from '../../style/svg/clg'

const OptionWindow = () => {
    const history = useHistory();
    return (
        <React.Fragment>
            <div className="w-full" style={{ minHeight: '100vh' }}>
                <div className="fixed z-20 top-0 left-0 px-12 py-6">
                    <ClgSvg />
                </div>
                <div className="flex flex-col flex-1 items-center justify-center " style={{ minHeight: 800 }}>
                    <div className="rounded-lg p-8" style={{ minHeight: 250, minWidth: 600, background: "#e2f1f9" }}>
                        <div className="flex flex-col flex-initial items-center">
                            <div className="text-2xl bold"> Please Select</div>
                            <div className="p-6 space-y-6 w-full flex flex-col justify-center items-center">
                                <button type="button"
                                    onClick={() => history.push('/doctor')}
                                    className="p-3 flex justify-center rounded-lg bold text-xl"
                                    style={{ width: "80%", background: '#6bb3e4', color: '#fff' }}>Doctor</button>
                                <button
                                    type="button"
                                    onClick={() => history.push('/patient')}
                                    className="p-3 flex justify-center rounded-lg bold text-xl"
                                    style={{ width: "80%", background: '#6bb3e4', color: '#fff' }}>Patient</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default OptionWindow
