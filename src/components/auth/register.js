import React from 'react'
import { useHistory } from 'react-router'
import { useRouteMatch } from 'react-router-dom';
import { toast } from 'react-toastify';
import { requestApi } from '../../utils/request';

const Register = () => {

    const history = useHistory();
    let { url } = useRouteMatch();

    const [userDetails, setuser] = React.useState({
        "firstname": "",
        "lastname": "",
        "mail": "",
        "password": "",
        "type": url.split('/')[1]
    });

    const onSetUser = (name, value) => {
        setuser({ ...userDetails, [name]: value })
    }

    const onClickSubmit = async () => {
        if (!userDetails.firstname || !userDetails.lastname || !userDetails.mail || !userDetails.password) {
            toast.error("Please enter all the values", {
                hideProgressBar: true,
                closeOnClick: true,
            })
        } else {
            let data = await requestApi("http://localhost:5000/auth/register", "POST", userDetails)
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
            <div className="text-2xl bold text-center pb-4">Register</div>

            <div className="w-full h-full flex flex-col space-y-6 justify-center items-center">
                <input
                    type="text"
                    onChange={(e) => onSetUser("firstname", e.target.value)}
                    className="rounded-lg px-2 py-2 text-xl"
                    style={{ background: '#ffffff', minWidth: '400px', maxWidth: '600px' }}
                    placeholder="First Name" id="fname" name="fname"></input>

                <input
                    type="text"
                    className="rounded-lg px-2 py-2 text-xl"
                    onChange={(e) => onSetUser("lastname", e.target.value)}

                    placeholder="Last Name"
                    style={{ background: '#ffffff', minWidth: '400px', maxWidth: '600px' }}
                    id="fname" name="fname"></input>

                <input type="text" className="rounded-lg px-2 py-2 text-xl"
                    onChange={(e) => onSetUser("mail", e.target.value)}

                    placeholder="mail I'D" style={{ background: '#ffffff', minWidth: '400px', maxWidth: '600px' }}
                    id="fname" name="fname"></input>

                <input type="password"
                    onChange={(e) => onSetUser("password", e.target.value)}
                    className="rounded-lg px-2 py-2 text-xl" placeholder="Password"
                    style={{ background: '#ffffff', minWidth: '400px', maxWidth: '600px' }}
                    id="fname" name="fname"></input>
                <button type="button" className="p-3 flex justify-center rounded-lg bold text-xl"
                    onClick={() => onClickSubmit(userDetails)}
                    style={{ width: "50%", background: '#6bb3e4', color: '#fff' }}>Register</button>
            </div>
        </div>
    )
}

export default Register
