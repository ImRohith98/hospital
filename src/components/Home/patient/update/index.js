import React from 'react'
import { toast } from 'react-toastify'
import Card from '../../../../containers/card'
import Drawer from '../../../../containers/drawer'
import Form from '../../../../containers/form'
import { requestApi } from '../../../../utils/request'

const UpdatePatient = () => {

    const [drawer, setdrawer] = React.useState(false)
    const [list, setList] = React.useState([])
    const [singleRec, setsingleRec] = React.useState([])
    const [ser, setser] = React.useState("")





    const getData = async () => {
        let datae = localStorage.getItem('userData')
        let r = JSON.parse(datae)
        let d = await requestApi("http://localhost:5000/patient/one", "POST", { id: r?.data.id, search: ser })
        setList(d)
    }

    React.useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [ser])



    const onSubmit = async (form) => {
        let { firstName, gender, mailid, dateOfBirth, doctor, specialization, appdateandtime } = form

        if (!firstName || !gender || !mailid || !dateOfBirth || !doctor || !specialization || !appdateandtime) {
            toast.error("Please enter Alll Details", {
                hideProgressBar: true,
                closeOnClick: true,
            })
        } else {

            let d = await requestApi("http://localhost:5000/patient/update", "POST", form)
            if (d?.error === true) {
                toast.error(d?.message, {
                    hideProgressBar: true,
                    closeOnClick: true,
                })
            } else {
                toast.success(d?.message, {
                    hideProgressBar: true,
                    closeOnClick: true,
                })
                getData()
            }
        }
    }

    return (
        <React.Fragment>
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
            <div className="flex flex-wrap  ">
                {
                    list?.data?.map((a, i) => (
                        <div key={i} onClick={() => { setsingleRec(list?.data[i]); setdrawer(!drawer) }}>
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

            <p>note : Click on Card to update..</p>
            {
                drawer ? (
                    <Drawer onChange={() => { setdrawer(!drawer) }} >
                        <div className="p-4 m-4 space-y-6">
                            <Form
                                onSubmit={(form) => { onSubmit(form) }}
                                formValue={singleRec}
                            />
                        </div>
                    </Drawer>
                ) : (
                    <p></p>
                )

            }

        </React.Fragment>
    )
}

export default UpdatePatient
