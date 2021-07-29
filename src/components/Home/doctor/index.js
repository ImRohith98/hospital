import React from 'react'
import { useHistory } from 'react-router-dom'
import Card from '../../../containers/card'
import Icon from "../../../style/svg/favicon.ico"
import LogoutSvg from '../../../style/svg/logout'
import { requestApi } from '../../../utils/request'

const DoctorHome = () => {
    let data = localStorage.getItem('userData')
    let r = JSON.parse(data)
    const history = useHistory();

    const [list, setList] = React.useState([])
    const [ser, setser] = React.useState("")


    const getData = async () => {
        let d = await requestApi("http://localhost:5000/patient/", "POST", { search: ser })
        setList(d)
    }


    React.useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [ser])

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
            <div className=" flex  space-x-4  p-8 w-full justify-center" >
                <div className="text-xl pt-2">
                    Search Appointment:
                </div>
                <input type="search"
                    className="rounded-lg px-2 py-2 text-xl"
                    onChange={(e) => setser(e.target.value)}
                    style={{ border: "1px solid #d3d3d3", background: '#ffffff', width: '75%', maxWidth: '600px' }}
                    placeholder="Search Appointment "
                    id="fname" name="fname"></input>
            </div>
            <div className="flex justify-end p-4">
                <input type="date"
                    // value={moment(form.appdateandtime).format('yyyy-MM-DDThh:mm')}
                    className="rounded-lg px-2 py-2 text-xl"
                    // onChange={(e) => onFormChange("appdateandtime", e.target.value)}
                    style={{ border: "1px solid #d3d3d3", background: '#ffffff', width: '55%', maxWidth: '300px' }}
                    id="fname" name="fname"></input>
            </div>
            <div className="flex flex-wrap  ">
                {
                    list?.data?.map((a, i) => (
                        <div key={i} >
                            <Card
                                name={a.doctor}
                                spe={a.specialization}
                                date={a.appdateandtime}
                                status={a.description}
                                firstName={a.firstName}

                            />
                        </div>
                    ))
                }
            </div>
        </React.Fragment>
    )
}

export default DoctorHome
