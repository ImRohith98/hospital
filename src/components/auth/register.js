import React from 'react'
import { useHistory } from 'react-router'

const Register = () => {

    const history = useHistory();
    return (
        <div className="space-y-6">
            <div className="text-2xl bold text-center pb-4">Register</div>

            <div className="w-full h-full flex flex-col space-y-6 justify-center items-center">
                <input
                    type="text"
                    className="rounded-lg px-2 py-2 text-xl"
                    style={{ background: '#ffffff', minWidth: '400px', maxWidth: '600px' }}
                    placeholder="First Name" id="fname" name="fname"></input>

                <input
                    type="text"
                    className="rounded-lg px-2 py-2 text-xl"
                    placeholder="Last Name"
                    style={{ background: '#ffffff', minWidth: '400px', maxWidth: '600px' }}
                    id="fname" name="fname"></input>

                <input type="text" className="rounded-lg px-2 py-2 text-xl"
                    placeholder="mail I'D" style={{ background: '#ffffff', minWidth: '400px', maxWidth: '600px' }}
                    id="fname" name="fname"></input>

                <input type="password"
                    className="rounded-lg px-2 py-2 text-xl" placeholder="Password"
                    style={{ background: '#ffffff', minWidth: '400px', maxWidth: '600px' }}
                    id="fname" name="fname"></input>
                <button type="button" className="p-3 flex justify-center rounded-lg bold text-xl"
                    onClick={() => history.push('./login')}
                    style={{ width: "50%", background: '#6bb3e4', color: '#fff' }}>Register</button>
            </div>
        </div>
    )
}

export default Register
