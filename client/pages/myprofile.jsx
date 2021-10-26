import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { EditUserDetails, Imageuploader, UserDetails } from '../components';
import moment from 'moment';


const Myprofile = () => {
    const [isuserDetails, setisuserDetails] = useState(false);
    const [isedituserDetails, setisedituserDetails] = useState(false);
    const [userData, setuserData] = useState('');
    const [accordion, setaccordion] = useState(false);
    const [Height, setHeight] = useState("0px");
    const content = useRef(null)
    const handleAccordion = () => {
        setHeight(!accordion ? "0px" : `${content.current.scrollHeight}px`);
        if (!accordion) {
            setaccordion(true)
        } else {
            setaccordion(false)
        }
        console.log(Height)
    }

    const openUserDetailsForm = () => {
        setisuserDetails(true)
    }
    const closeUserDetailsForm = () => {
        setisuserDetails(false)
    }

    const openEditForm = () => {
        setisedituserDetails(true)
    }
    const closeEditForm = () => {
        setisedituserDetails(false)
    }

    useEffect(() => {
        fetch('http://localhost:4000/user/profile_details', {
            method: 'get',
            headers: {
                'auth-token': localStorage.getItem('user_token')
            }
        }).then((res) => res.json())
            .then((data) => {
                setuserData(data.results[0])
            }).catch((err) => {
                console.log(err)
            })
    }, [])



    return (
        <div className="container mx-auto relative">
            {isuserDetails && <UserDetails closeUserDetailsForm={closeUserDetailsForm} />}
            {isedituserDetails && <EditUserDetails closeEditForm={closeEditForm} />}
            <div id="coverpic-wrapper" className="relative py-4">
                <img className="object-cover w-full h-[16rem] rounded-xl" src="https://images.unsplash.com/photo-1632714395151-aa853eac30e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1128&q=80" alt="mycover-pic" />
                <Link href="#"><a className="bg-black text-gray-50 px-6 py-1 text-sm rounded-full absolute top-6 right-2">Upload cover</a>
                </Link>
            </div>
            <div className="pl-8">
                <div className="flex flex-row space-x-4">
                    <div className="image-wrapper relative w-[12rem] ">
                        <img src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="cartoon" className="object-cover w-[12rem] h-[12rem] rounded-xl absolute top-[-6rem]" />
                        <span onClick={handleAccordion} id="update-profile" className="bg-white px-3 py-2 shadow-lg rounded-full absolute -bottom-4 right-2 text-blue-500 text-2xl"><i className="fas fa-edit"></i></span>
                        {/* <div className="pp-tooltip absolute -bottom-8 right-0">
                            <p className="text-gray-600 text-sm font-semibold">Update Profile</p>
                        </div> */}
                        <div style={{maxHeight: `${Height}`, transition: 'max-height 0.6s ease'}} ref={content} className="absolute -bottom-24 overflow-hidden" >
                                <Imageuploader />
                        </div>

                    </div>

                    <div>
                        <h1 className="text-gray-600 font-semibold text-2xl">Chandan Thakur</h1>
                        <p className="text-gray-600 font-semibold text-sm">fullstack Developer</p>
                        {userData == null ? <button onClick={openUserDetailsForm} className="bg-blue-500 px-4 py-2  hover:bg-blue-600 transition-all
                        duration-500 text-gray-50 text-sm mt-2 rounded-full">Upload pofile details</button> : <button onClick={openEditForm} className="bg-blue-500 px-4 py-2  hover:bg-blue-600 transition-all
                        duration-500 text-gray-50 text-sm mt-2 rounded-full">Update profile details</button>}
                    </div>
                </div>
            </div>

            <div className="mt-16">
                {userData && <table id="personal-details-table" className="shadow-2xl rounded-xl mx-auto text-gray-600" style={{ width: "50%" }}>
                    <tr>
                        <th>Firstname</th>
                        <td>{userData.firstname}</td>
                    </tr>
                    <tr>
                        <th>Lastname</th>
                        <td>{userData.lastname}</td>
                    </tr>
                    <tr>
                        <th>email</th>
                        <td>{userData.employee_email}</td>
                    </tr>
                    <tr>
                        <th>Phone Number</th>
                        <td>{userData.phone_number}</td>
                    </tr>
                    <tr>
                        <th>BloodGroup</th>
                        <td>{userData.blood_group}</td>
                    </tr>
                    <tr>
                        <th>address</th>
                        <td>
                            {userData.address}
                        </td>
                    </tr>
                    <tr>
                        <th>city</th>
                        <td>{userData.city}</td>
                    </tr>
                    <tr>
                        <th>province</th>
                        <td>{userData.province}</td>
                    </tr>
                    <tr>
                        <th>birthday</th>
                        <td>{moment(userData.dob).format("LL")}</td>
                    </tr>
                    <tr>
                        <th>gender</th>
                        <td>{userData.gender}</td>
                    </tr>
                    <tr>
                        <th>emergency contact name</th>
                        <td>{userData.emergency_contact_name}</td>
                    </tr>
                    <tr>
                        <th>emergency contact number</th>
                        <td>{userData.emergency_contact_number}</td>
                    </tr>
                    <tr>
                        <th>Join date</th>
                        <td>{moment(userData.joining_date).format("LL")}</td>
                    </tr>
                </table>}

            </div>
        </div>
    )
}

export default Myprofile
