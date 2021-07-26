import React from 'react'
import { useHistory } from 'react-router'

const ForgetPass = () => {

    const history = useHistory()

    return (
        <div className="space-y-6">
            <div className="text-2xl bold text-center pb-4">Forget Password </div>
            <div className="w-full h-full flex flex-col space-y-6 justify-center items-center">
                <input type="text" className="rounded-lg px-2 py-2 text-xl" style={{ background: '#ffffff', minWidth: '400px', maxWidth: '600px' }} placeholder="User ID" id="fname" name="fname"></input>
                <input type="password" className="rounded-lg px-2 py-2 text-xl" placeholder="Password" style={{ background: '#ffffff', minWidth: '400px', maxWidth: '600px' }} id="fname" name="fname"></input>
                <input type="password" className="rounded-lg px-2 py-2 text-xl" placeholder="Password" style={{ background: '#ffffff', minWidth: '400px', maxWidth: '600px' }} id="fname" name="fname"></input>
                <button type="button" className="p-3 flex justify-center rounded-lg bold text-xl" style={{ width: "50%", background: '#6bb3e4', color: '#fff' }}>Submit</button>
            </div>
            <div className=" text-center  space-y-4 justify-center items-center flex flex-col">
                <div>Back to Login </div>
                <button type="button"
                    className="p-3 flex justify-center rounded-lg bold text-xl"
                    onClick={() => history.push("./login")}
                    style={{ width: "40%", background: '#6bb3e4', color: '#fff' }}>Login</button>
            </div>
        </div>
    )
}

export default ForgetPass
