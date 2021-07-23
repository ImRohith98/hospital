import React from 'react'
import { useHistory } from 'react-router'

const Login = () => {

    const history = useHistory()
    return (
        <div className="space-y-6">
            <div className="w-full h-full flex flex-col space-y-6 justify-center items-center">
                <input type="text" className="rounded-lg px-2 py-2 text-xl" style={{ background: '#ffffff', minWidth: '400px', maxWidth: '600px' }} placeholder="User ID" id="fname" name="fname"></input>
                <input type="password" className="rounded-lg px-2 py-2 text-xl" placeholder="Password" style={{ background: '#ffffff', minWidth: '400px', maxWidth: '600px' }} id="fname" name="fname"></input>
                <button type="button" className="p-3 flex justify-center rounded-lg bold text-xl" style={{ width: "50%", background: '#6bb3e4', color: '#fff' }}>Login</button>
            </div>
            <div className="flex justify-end cursor-pointer" onClick={() => history.push('./forgetpassword')}>
                forget password ?
           </div>
            <div className=" text-center  space-y-4 justify-center items-center flex flex-col">
                <div>    Don't Have Account? <span style={{ color: '#ea3c0f' }}>Register Now!</span></div>
                <button type="button"
                    className="p-3 flex justify-center rounded-lg bold text-xl"
                    onClick={() => history.push("/register")}
                    style={{ width: "40%", background: '#6bb3e4', color: '#fff' }}>Register</button>
            </div>
        </div>
    )
}

export default Login
