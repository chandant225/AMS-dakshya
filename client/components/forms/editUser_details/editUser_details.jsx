import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import moment from 'moment'
import Swal from 'sweetalert2';

const EditUserDetails = ({ closeEditForm }) => {
    const [renderDetails, setrenderDetails] = useState("");
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [phonenumber, setphonenumber] = useState("");
    const [bloodgroup, setbloodgroup] = useState("");
    const [address, setaddress] = useState("");
    const [city, setcity] = useState("");
    const [province, setprovince] = useState("province no 1");
    const [birthday, setbirthday] = useState("");
    const [gender, setgender] = useState("Male");
    const [ecname, setecname] = useState("");
    const [ecnumber, setecnumber] = useState("");
    const [joiningdate, setjoiningdate] = useState("");

    useEffect(() => {
        fetch('http://localhost:4000/user/profile_details', {
            method: 'get',
            headers: {
                "auth-token": localStorage.getItem('user_token')
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setrenderDetails(data.results[0])
                setfirstname(data.results[0].firstname)
                setlastname(data.results[0].lastname)
                setemail(data.results[0].employee_email)
                setphonenumber(data.results[0].phone_number)
                setbloodgroup(data.results[0].blood_group)
                setaddress(data.results[0].address)
                setcity(data.results[0].city)
                setprovince(data.results[0].province)
                setbirthday(data.results[0].dob)
                setgender(data.results[0].gender)
                setecname(data.results[0].emergency_contact_name)
                setecnumber(data.results[0].emergency_contact_number)
                setjoiningdate(data.results[0].joining_date)
            
            }).catch((err) => {
                console.log(err)
            })
    }, [])


    const user_data = {
        firstname,
        lastname,
        email,
        phonenumber,
        bloodgroup,
        address,
        city,
        province,
        birthday,
        gender,
        ecname,
        ecnumber,
        joiningdate,
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/user/edit_profile', {
            method: 'put',
            headers: {
                "auth-token": localStorage.getItem('user_token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user_data)
        })
            .then((res) => res.json())
            .then((data) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulation',
                    text: data.message,
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }).catch((err) => {
                console.log(err)
            })
    }



    return (
        <div className="absolute top-0 z-50 bg-gray-200 w-full">
            <div className="w-[50%] relative shadow-2xl mt-8 rounded-lg text-center mx-auto px-4 py-6">
                <span onClick={closeEditForm} className="float-right text-2xl"><i className="fas fa-times"></i></span>
                <center className="pb-8">
                    <h1 className="text-4xl text-gray-600 font-semibold">
                        edit the form
                    </h1>
                    <hr className="w-[50%] mt-3 border-[1px]"></hr>
                </center>
                <div className="flex flex-row gap-x-8 py-2">
                    <input
                        value={firstname}
                        onChange={(e) => {
                            setfirstname(e.target.value);
                        }}
                        type="text"
                        placeholder={renderDetails.firstname}
                        className="w-[50%] bg-gray-200 focus:outline-none  rounded-full border-2 border-gray-300 px-4 py-3"
                    />
                    <input
                        value={lastname}
                        onChange={(e) => {
                            setlastname(e.target.value);
                        }}
                        type="text"
                        placeholder={renderDetails.lastname}
                        className="w-[50%] rounded-full focus:outline-none  border-2 border-gray-300 px-4 py-3 bg-gray-200"
                    />
                </div>
                <input
                    value={email}
                    onChange={(e) => {
                        setemail(e.target.value);
                    }}
                    type="email"
                    placeholder={renderDetails.employee_email}
                    className="w-[100%] rounded-full focus:outline-none  bg-gray-200 px-4 py-3 my-3 border-2 border-gray-300 mt-3"
                />
                <div className="flex flex-row gap-x-8 py-2">
                    <input
                        value={phonenumber}
                        onChange={(e) => {
                            setphonenumber(e.target.value);
                        }}
                        type="number"
                        placeholder={renderDetails.phone_number}
                        className="w-[50%] bg-gray-200 focus:outline-none  rounded-full border-2 border-gray-300 px-4 py-3"
                    />
                    <input
                        value={bloodgroup}
                        onChange={(e) => {
                            setbloodgroup(e.target.value);
                        }}
                        type="text"
                        placeholder={renderDetails.blood_group}
                        className="w-[50%] rounded-full focus:outline-none  border-2 border-gray-300 px-4 py-3 bg-gray-200"
                    />
                </div>
                <textarea
                    value={address}
                    onChange={(e) => {
                        setaddress(e.target.value);
                    }}
                    type="text"
                    className="w-[100%] rounded-xl focus:outline-none bg-gray-200 border-gray-300 my-3 px-4 py-3 border-2 mt-3"
                    placeholder={renderDetails.address}
                ></textarea>
                <div className="flex flex-row justify-between gap-x-8 items-center my-3">
                    <div className="w-[50%]">
                        <label className="block text-gray-600 font-semibold px-4">
                            city
                        </label>
                        <input
                            value={city}
                            onChange={(e) => {
                                setcity(e.target.value);
                            }}
                            type="text"
                            placeholder={renderDetails.city}
                            className="w-full rounded-full focus:outline-none  bg-gray-200 border-gray-300 px-4 py-3 border-2 mt-3"
                        />
                    </div>

                    <div className="w-[50%]">
                        <label className="block text-gray-600 font-semibold px-4">
                            province
                        </label>
                        {renderDetails && <p>{renderDetails.province}</p>}
                        <select
                            value={province}
                            onChange={(e) => setprovince(e.target.value)}
                            className="w-full rounded-full focus:outline-none bg-gray-200 border-gray-300 px-4 py-3 border-2 mt-3"
                        >
                            <option value="">choose province</option>
                            <option value="1">province no 1</option>
                            <option value="2">province no 2</option>
                            <option value="3">province no 3</option>
                            <option value="4">province no 4</option>
                            <option value="5">province no 5</option>
                            <option value="6">province no 6</option>
                            <option value="7">province no 7</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-row justify-between gap-x-8 items-center my-3">
                    <div className="w-[50%]">
                        <label className="block text-gray-600 font-semibold px-4">
                            Birthday
                        </label>
                        {renderDetails && <p>{moment(renderDetails.dob).format('LL')}</p>}
                        <input
                            value={birthday}
                            onChange={(e) => setbirthday(e.target.value)}
                            type="date"
                            className="w-full rounded-full focus:outline-none  bg-gray-200 border-gray-300 px-4 py-3 border-2 mt-3"
                        />
                    </div>

                    <div className="w-[50%]">
                        <label className="block text-gray-600 font-semibold px-4">
                            Gender
                        </label>
                        {renderDetails && <p>{renderDetails.gender}</p>}
                        <select
                            value={gender}
                            onChange={(e) => setgender(e.target.value)}
                            className="w-full rounded-full focus:outline-none  bg-gray-200 border-gray-300 px-4 py-3 border-2 mt-3"
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-row gap-x-8 py-2">
                    <input
                        value={ecname}
                        onChange={(e) => setecname(e.target.value)}
                        type="text"
                        placeholder={renderDetails.emergency_contact_name}
                        className="w-[50%] bg-gray-200 focus:outline-none  rounded-full border-2 border-gray-300 px-4 py-3"
                    />
                    <input
                        value={ecnumber}
                        onChange={(e) => setecnumber(e.target.value)}
                        type="number"
                        placeholder={renderDetails.emergency_contact_number}
                        className="w-[50%] rounded-full focus:outline-none  border-2 border-gray-300 px-4 py-3 bg-gray-200"
                    />
                </div>
                <div className="w-[50%] justify-start mb-4">
                    <label className="block text-gray-600 font-semibold px-4 float-left">
                        joining date
                    </label>
                    {renderDetails && <p>{moment(renderDetails.joining_date).format('LL')}</p>}
                    <input
                        value={joiningdate}
                        onChange={(e) => setjoiningdate(e.target.value)}
                        type="date"
                        className="w-full rounded-full focus:outline-none  bg-gray-200 border-gray-300 px-4 py-3 border-2 mt-3"
                    />
                </div>
                <button
                    onClick={handleUpdate}
                    className="w-[50%] mt-4 px-3 hover:scale-x-110 hover:transform transition-all duration-500 bg-purple-600 rounded-full text-lg font-semibold text-gray-100 py-2"

                >
                    Update Form
                </button>

            </div>
        </div>
    );
}

export default EditUserDetails
