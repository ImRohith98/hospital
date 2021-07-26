import React from 'react'
import Card from '../../../../containers/card'
import Drawer from '../../../../containers/drawer'
import Form from '../../../../containers/form'

const UpdatePatient = () => {

    const [drawer, setdrawer] = React.useState(false)

    let updateList = [
        {
            name: 'DR.Rohith',
            spe: 'ENT',
            date: "23-07-2021 12:00",
            status: 'Active'
        },
        {
            name: 'DR.Rohith',
            spe: 'ENT',
            date: "23-07-2021 12:00",
            status: 'Active'
        },
        {
            name: 'DR.Rohith',
            spe: 'ENT',
            date: "23-07-2021 12:00",
            status: 'Active'
        },
        {
            name: 'DR.Rohith',
            spe: 'ENT',
            date: "23-07-2021 12:00",
            status: 'Active'
        },
        {
            name: 'DR.Rohith',
            spe: 'ENT',
            date: "23-07-2021 12:00",
            status: 'Active'
        }
    ]

    let formvalue = {
        firstname: "rohith",
        lastname: "reddy",
        middlename: "mandala",
        mail: "rohith.mandala@outlook.com",
        gender: "male",
        dateofbirth: "1998-06-17",
        address: "flat no 410",
        specialization: "ent",
        doctor: "rohith",
        dateofapp: '2021-07-23T12:00',
        description: "testing",
    }

    return (
        <React.Fragment>
            <div className=" flex  space-x-4  p-8 w-full justify-center" >
                <div className="text-xl pt-2">
                    Search Appointment:
                </div>
                <input type="search"
                    className="rounded-lg px-2 py-2 text-xl"
                    // onChange={(e) => setuserName(e.target.value)}
                    style={{ border: "1px solid #d3d3d3", background: '#ffffff', width: '75%', maxWidth: '600px' }}
                    placeholder="Search Appointment "
                    id="fname" name="fname"></input>
            </div>
            <div className="flex flex-wrap  ">
                {
                    updateList.map((a, i) => (
                        <div key={i}>
                            <Card
                                name={a.name}
                                spe={a.spe}
                                date={a.date}
                                status={a.status}
                                onClick={() => setdrawer(!drawer)}
                            />
                        </div>
                    ))
                }
            </div>
            {
                drawer ? (
                    <Drawer onChange={() => { setdrawer(!drawer) }} >
                        <div className="p-4 m-4 space-y-6">
                            <Form
                                onSubmit={(form) => { console.log(form) }}
                                formValue={formvalue}
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
