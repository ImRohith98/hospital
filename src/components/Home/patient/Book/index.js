import React from 'react'

const BookPatient = () => {
    return (
        <React.Fragment>
            <div className="p-8 flex flex-col space-y-6 w-full">
                <span>  Please fill in the patient details</span>
                <div className="flex space-x-6 w-full">
                    <div className="space-y-4 w-full" >
                        <div className="text-xl">
                            First Name :
                        </div>
                        <input type="text"
                            className="rounded-lg px-2 py-2 text-xl"
                            // onChange={(e) => setuserName(e.target.value)}
                            style={{ border: "1px solid #d3d3d3", background: '#ffffff', width: '75%', maxWidth: '600px' }}
                            placeholder="First Name" id="fname" name="fname"></input>
                    </div>
                    <div className="space-y-4 w-full" >
                        <div className="text-xl">
                            Middle Name :
                        </div>
                        <input type="text"
                            className="rounded-lg px-2 py-2 text-xl"
                            // onChange={(e) => setuserName(e.target.value)}
                            style={{ border: "1px solid #d3d3d3", background: '#ffffff', width: '75%', maxWidth: '600px' }}
                            placeholder="Middle Name" id="fname" name="fname"></input>
                    </div>
                    <div className="space-y-4 w-full" >
                        <div className="text-xl">
                            Last Name :
                        </div>
                        <input type="text"
                            className="rounded-lg px-2 py-2 text-xl"
                            // onChange={(e) => setuserName(e.target.value)}
                            style={{ border: "1px solid #d3d3d3", background: '#ffffff', width: '75%', maxWidth: '600px' }}
                            placeholder="Last Name" id="fname" name="fname"></input>
                    </div>
                </div>

                <div className="flex space-x-6">
                    <div className="space-y-4 w-full" >
                        <div className="text-xl">
                            Mail ID :
                        </div>
                        <input type="email"
                            className="rounded-lg px-2 py-2 text-xl"
                            // onChange={(e) => setuserName(e.target.value)}
                            style={{ border: "1px solid #d3d3d3", background: '#ffffff', width: '75%', maxWidth: '600px' }}
                            placeholder="Mail ID" id="fname" name="fname"></input>
                    </div>
                    <div className="space-y-4 w-full" >
                        <div className="text-xl">
                            Gender :
                        </div>
                        <select name="cars" id="cars" value={""} onChange={(e) => console.log(e.target.value)} className="border rounded-lg" placeholder="Gender" style={{ width: "75%", border: "1px solid #d3d3d3", padding: '10px' }}>
                            <option value="general">Select</option>
                            <option value="general">Male</option>
                            <option value="ent">Female</option>
                        </select>
                    </div>
                    <div className="space-y-4 w-full" >
                        <div className="text-xl">
                            Date Of Birth :
                        </div>
                        <input type="date"
                            className="rounded-lg px-2 py-2 text-xl"
                            // onChange={(e) => setuserName(e.target.value)}
                            style={{ border: "1px solid #d3d3d3", background: '#ffffff', width: '75%', maxWidth: '600px' }}
                            id="fname" name="fname"></input>
                    </div>
                </div>
                <div className="space-y-4 w-full">
                    <div className="text-xl">
                        Address :
                    </div>
                    <textarea name="comment" form="usrform"
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
                        <select name="cars" id="cars" value={""} onChange={(e) => console.log(e.target.value)} className="border rounded-lg" placeholder="Specialization" style={{ width: "75%", border: "1px solid #d3d3d3", padding: '10px' }}>
                            <option value="general">Select</option>
                            <option value="general">General Practice</option>
                            <option value="ent">ENT</option>
                            <option value="orthopedic">Orthopedic</option>
                        </select>
                    </div>
                    <div className="space-y-4 w-full">
                        <div className="text-xl">
                            Select Doctor :
                        </div>
                        <select name="cars" id="cars" value={""} onChange={(e) => console.log(e.target.value)} className="border rounded-lg" placeholder="Specialization" style={{ width: "75%", border: "1px solid #d3d3d3", padding: '10px' }}>
                            <option value="general">Select</option>
                            <option value="general">General Practice</option>
                            <option value="ent">ENT</option>
                            <option value="orthopedic">Orthopedic</option>
                        </select>
                    </div>
                    <div className="space-y-4 w-full">
                        <div className="text-xl">
                            Select Date & Time :
                        </div>
                        <input type="datetime-local"
                            className="rounded-lg px-2 py-2 text-xl"
                            // onChange={(e) => setuserName(e.target.value)}
                            style={{ border: "1px solid #d3d3d3", background: '#ffffff', width: '75%', maxWidth: '600px' }}
                            id="fname" name="fname"></input>
                    </div>

                </div>
                <div className="space-y-4 w-full">
                    <div className="text-xl">
                        Description :
                    </div>
                    <textarea name="comment" form="usrform"
                        className="rounded-lg px-2 py-2 text-xl"
                        style={{ border: "1px solid #d3d3d3", background: '#ffffff', width: '75%' }}
                        placeholder="Describe Your Problem"
                    ></textarea>
                </div>
                <button type="button"
                    // onClick={() => onClickLogin()}
                    className="p-3 flex justify-center rounded-lg bold text-xl items-center" style={{ width: "10%", background: '#6bb3e4', color: '#fff' }}>Submit</button>
            </div>
        </React.Fragment>
    )
}

export default BookPatient


