import React from 'react'
import { toast } from 'react-toastify'
import Card from '../../../../containers/card'
import { requestApi } from '../../../../utils/request'

const DeletePatient = () => {

    const [list, setList] = React.useState([])
    const [ser, setser] = React.useState("")

    const getData = async () => {
        let datae = localStorage.getItem('userData')
        let r = JSON.parse(datae)
        let d = await requestApi("http://localhost:5000/patient/one", "POST", { id: r?.data.id, search: ser })
        setList(d)
    }

    const getDelete = async (data) => {
        let d = await requestApi("http://localhost:5000/patient/delete", "POST", { id: data._id, })
        toast.success(d?.message, {
            hideProgressBar: true,
            closeOnClick: true,
        })
        getData()
    }


    React.useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [ser])

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
                        <div key={i} onClick={() => { getDelete(list?.data[i]) }}>
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
            <p className="text-red-500">note : Click on Card to Delete..</p>

        </React.Fragment>
    )
}

export default DeletePatient
