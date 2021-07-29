import React from 'react'
import moment from 'moment'

const Form = ({ onSubmit, formValue }) => {

    const [form, setform] = React.useState({
        firstName: "",
        lastName: "",
        middleName: "",
        mailid: "",
        gender: "",
        dateOfBirth: "",
        address: "",
        specialization: "",
        doctor: "",
        appdateandtime: '',
        description: "",
        userID: ''
    })

    const onFormChange = (name, value) => {
        setform({
            ...form, [name]: value
        })
    }

    React.useEffect(() => {
        if (formValue) {
            setform({ ...form, ...formValue })
        }
        // eslint-disable-next-line
    }, [formValue])

    console.log(moment(form.appdateandtime).format('yyyy-MM-DDThh:mm'))


    return (
        <React.Fragment>
            <div className="flex space-x-6 w-full">
                <div className="space-y-4 w-full" >
                    <div className="text-xl">
                        First Name :
                    </div>
                    <input type="text"
                        className="rounded-lg px-2 py-2 text-xl"
                        value={form.firstName}
                        onChange={(e) => onFormChange("firstName", e.target.value)}
                        style={{ border: "1px solid #d3d3d3", background: '#ffffff', width: '75%', maxWidth: '600px' }}
                        placeholder="First Name" id="fname" name="fname"></input>
                </div>
                <div className="space-y-4 w-full" >
                    <div className="text-xl">
                        Middle Name :
                    </div>
                    <input type="text"
                        className="rounded-lg px-2 py-2 text-xl"
                        value={form.middleName}

                        onChange={(e) => onFormChange("middleName", e.target.value)}
                        style={{ border: "1px solid #d3d3d3", background: '#ffffff', width: '75%', maxWidth: '600px' }}
                        placeholder="Middle Name" id="mname" name="mname"></input>
                </div>
                <div className="space-y-4 w-full" >
                    <div className="text-xl">
                        Last Name :
                    </div>
                    <input type="text"
                        className="rounded-lg px-2 py-2 text-xl"
                        value={form.lastName}

                        onChange={(e) => onFormChange("lastName", e.target.value)}
                        style={{ border: "1px solid #d3d3d3", background: '#ffffff', width: '75%', maxWidth: '600px' }}
                        placeholder="Last Name" id="lname" name="lname"></input>
                </div>
            </div>

            <div className="flex space-x-6">
                <div className="space-y-4 w-full" >
                    <div className="text-xl">
                        Mail ID :
                    </div>
                    <input type="email"
                        className="rounded-lg px-2 py-2 text-xl"
                        value={form.mailid}

                        onChange={(e) => onFormChange("mailid", e.target.value)}
                        style={{ border: "1px solid #d3d3d3", background: '#ffffff', width: '75%', maxWidth: '600px' }}
                        placeholder="Mail ID" id="email" name="email"></input>
                </div>
                <div className="space-y-4 w-full" >
                    <div className="text-xl">
                        Gender :
                    </div>
                    <select name="cars" id="cars"
                        value={form.gender}
                        onChange={(e) => onFormChange("gender", e.target.value)}
                        className="border rounded-lg" placeholder="Gender"
                        style={{ width: "75%", border: "1px solid #d3d3d3", padding: '10px' }}>
                        <option value="none">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="space-y-4 w-full" >
                    <div className="text-xl">
                        Date Of Birth :
                    </div>
                    <input type="date"
                        className="rounded-lg px-2 py-2 text-xl"
                        value={moment(form.dateOfBirth).format('yyyy-MM-DD')}
                        onChange={(e) => onFormChange("dateOfBirth", e.target.value)}
                        style={{ border: "1px solid #d3d3d3", background: '#ffffff', width: '75%', maxWidth: '600px' }}
                        id="dob" name="dob"></input>
                </div>
            </div>
            <div className="space-y-4 w-full">
                <div className="text-xl">
                    Address :
                </div>
                <textarea name="address" form="usrform"
                    value={form.address}
                    onChange={(e) => onFormChange("address", e.target.value)}
                    className="rounded-lg px-2 py-2 text-xl"
                    style={{ border: "1px solid #d3d3d3", background: '#ffffff', width: '75%' }}
                    placeholder="Address"
                ></textarea>
            </div>

            <div className="flex space-x-6">
                <div className="space-y-4 w-full">
                    <div className="text-xl">
                        Select Specialization :
                    </div>
                    <select name="specialization" id="specialization"
                        value={form.specialization}
                        onChange={(e) => onFormChange("specialization", e.target.value)}
                        className="border rounded-lg" placeholder="Specialization"
                        style={{ width: "75%", border: "1px solid #d3d3d3", padding: '10px' }}>
                        <option value="select">Select</option>
                        <option value="general">General Practice</option>
                        <option value="ENT">ENT</option>
                        <option value="orthopedic">Orthopedic</option>
                    </select>
                </div>
                <div className="space-y-4 w-full">
                    <div className="text-xl">
                        Select Doctor :
                    </div>
                    <select name="doctors" id="doctors"
                        value={form.doctor}
                        onChange={(e) => onFormChange("doctor", e.target.value)}
                        className="border rounded-lg"
                        placeholder="Specialization"
                        style={{ width: "75%", border: "1px solid #d3d3d3", padding: '10px' }}>
                        <option value="none">Select</option>
                        <option value="EdwardJenner">Edward Jenner</option>
                        <option value="Alexander Fleming">Alexander Fleming</option>
                        <option value="Virginia Apgar">Virginia Apgar</option>
                        <option value="Charles R. Drew">Charles R. Drew</option>
                        <option value="Terry Dubrow">Terry Dubrow</option>
                        <option value="Hippocrates">Hippocrates</option>
                        <option value="Alfred Blalock">Alfred Blalock</option>
                        <option value="James Andrews">James Andrews</option>
                        <option value="Naresh Trehan">Naresh Trehan</option>
                        <option value="Thomas F. Frist Jr.">Thomas F. Frist Jr.</option>

                    </select>
                </div>
                <div className="space-y-4 w-full">
                    <div className="text-xl">
                        Select Date & Time :
                    </div>
                    <input type="datetime-local"
                        value={moment(form.appdateandtime).format('yyyy-MM-DDThh:mm')}
                        className="rounded-lg px-2 py-2 text-xl"
                        onChange={(e) => onFormChange("appdateandtime", e.target.value)}
                        style={{ border: "1px solid #d3d3d3", background: '#ffffff', width: '75%', maxWidth: '600px' }}
                        id="fname" name="fname"></input>
                </div>

            </div>
            <div className="space-y-4 w-full">
                <div className="text-xl">
                    Description :
                </div>
                <textarea name="description" form="usrform"
                    value={form.description}
                    onChange={(e) => onFormChange("description", e.target.value)}
                    className="rounded-lg px-2 py-2 text-xl"
                    style={{ border: "1px solid #d3d3d3", background: '#ffffff', width: '75%' }}
                    placeholder="Describe Your Problem"
                ></textarea>
            </div>
            <button type="button"
                onClick={() => onSubmit(form)}
                className="p-3 flex justify-center rounded-lg bold text-xl items-center" style={{ width: "10%", background: '#6bb3e4', color: '#fff' }}>Submit</button>
        </React.Fragment>
    )
}

export default Form
