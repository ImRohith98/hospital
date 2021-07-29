import React from 'react'
import { useHistory } from 'react-router'
import { useRouteMatch } from 'react-router-dom';
import { toast } from 'react-toastify';
import { requestApi } from '../../utils/request';

const ForgetPass = () => {

    const history = useHistory();
    let { url } = useRouteMatch();

    const [userDetails, setuser] = React.useState({
        "mail": "",
        "secPassword": "",
        "newPassword": "",
        "type": url.split('/')[1]
    });

    const onSetUser = (name, value) => {
        setuser({ ...userDetails, [name]: value })
    }

    const onClickSubmit = async () => {
        if (!userDetails.mail || !userDetails.secPassword || !userDetails.newPassword) {
            toast.error("Please enter all the values", {
                hideProgressBar: true,
                closeOnClick: true,
            })
        } else if (userDetails.secPassword !== userDetails.newPassword) {
            toast.error("Please enter Correct Password", {
                hideProgressBar: true,
                closeOnClick: true,
            })
        }
        else {
            let r = {
                mail: userDetails.mail,
                newPassword: userDetails.newPassword,
                type: userDetails.type
            }
            let data = await requestApi("http://localhost:5000/auth/forgetpassword", "POST", r)
            if (data?.error === true) {
                toast.error(data?.message, {
                    hideProgressBar: true,
                    closeOnClick: true,
                })
            } else {
                toast.success(data?.message, {
                    hideProgressBar: true,
                    closeOnClick: true,
                })
                history.push(`./login`)
            }
        }
    }

    return (
        <div className="space-y-6">
            <div className="text-2xl bold text-center pb-4">Forget Password </div>
            <div className="w-full h-full flex flex-col space-y-6 justify-center items-center">
                <input type="text"
                    className="rounded-lg px-2 py-2 text-xl"
                    onChange={(e) => onSetUser("mail", e.target.value)}
                    style={{ background: '#ffffff', minWidth: '400px', maxWidth: '600px' }}
                    placeholder="User ID" id="fname" name="fname"></input>

                <input type="password" className="rounded-lg px-2 py-2 text-xl"
                    placeholder="Password"
                    onChange={(e) => onSetUser("newPassword", e.target.value)}
                    style={{ background: '#ffffff', minWidth: '400px', maxWidth: '600px' }}
                    id="fname" name="fname"></input>

                <input type="password" className="rounded-lg px-2 py-2 text-xl"
                    onChange={(e) => onSetUser("secPassword", e.target.value)}
                    placeholder="Password" style={{ background: '#ffffff', minWidth: '400px', maxWidth: '600px' }}
                    id="fname" name="fname"></input>

                <button type="button"
                    onClick={() => onClickSubmit(userDetails)}
                    className="p-3 flex justify-center rounded-lg bold text-xl"
                    style={{ width: "50%", background: '#6bb3e4', color: '#fff' }}>Submit</button>
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
