import React from 'react'

const Form = ({ onSubmit, formValue }) => {

    const [form, setform] = React.useState({
        firstname: "",
        lastname: "",
        middlename: "",
        mail: "",
        gender: "",
        dateofbirth: "",
        address: "",
        specialization: "",
        doctor: "",
        dateofapp: '',
        description: "",
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


    return (
        <React.Fragment>
            <div className="flex space-x-6 w-full">
                <div className="space-y-4 w-full" >
                    <div className="text-xl">
                        First Name :
                    </div>
                    <input type="text"
                        className="rounded-lg px-2 py-2 text-xl"
                        value={form.firstname}
                        onChange={(e) => onFormChange("firstname", e.target.value)}
                        style={{ border: "1px solid #d3d3d3", background: '#ffffff', width: '75%', maxWidth: '600px' }}
                        placeholder="First Name" id="fname" name="fname"></input>
                </div>
                <div className="space-y-4 w-full" >
                    <div className="text-xl">
                        Middle Name :
                    </div>
                    <input type="text"
                        className="rounded-lg px-2 py-2 text-xl"
                        value={form.middlename}

                        onChange={(e) => onFormChange("middlename", e.target.value)}
                        style={{ border: "1px solid #d3d3d3", background: '#ffffff', width: '75%', maxWidth: '600px' }}
                        placeholder="Middle Name" id="mname" name="mname"></input>
                </div>
                <div className="space-y-4 w-full" >
                    <div className="text-xl">
                        Last Name :
                    </div>
                    <input type="text"
                        className="rounded-lg px-2 py-2 text-xl"
                        value={form.lastname}

                        onChange={(e) => onFormChange("lastname", e.target.value)}
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
                        value={form.mail}

                        onChange={(e) => onFormChange("mail", e.target.value)}
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
                        value={form.dateofbirth}
                        onChange={(e) => onFormChange("dateofbirth", e.target.value)}
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
                        <option value="ent">ENT</option>
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
                        <option value="rohith">rohith</option>
                        <option value="tinku">tinku</option>
                        <option value="aasta">asta</option>
                    </select>
                </div>
                <div className="space-y-4 w-full">
                    <div className="text-xl">
                        Select Date & Time :
                    </div>
                    <input type="datetime-local"
                        value={form.dateofapp}
                        className="rounded-lg px-2 py-2 text-xl"
                        onChange={(e) => onFormChange("dateofapp", e.target.value)}
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
