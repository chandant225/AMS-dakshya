import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Table from '../components/table'
import Swal from 'sweetalert2'
import { AttendanceTable } from '../components'
import Link from 'next/link'

const Dashboard = () => {
    const [user_Attendance, setuser_Attendance] = useState('');
    const [reason, setReason] = useState('General');
    const [optional, setoptional] = useState(false);

    const setGeneral = () => {
        setReason('General')
    }

    const openOptional = () => {
        setoptional(true)
    }

    const closeOptional = () => {
        setoptional(false)
    }
    const checkOut_data = {
        reason,
    }

    const handleCheck_out = () => {
        fetch(`http://localhost:4000/user/check_out`, {
            method: 'post',
            headers: {
                "auth-token": localStorage.getItem('user_token'),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(checkOut_data)
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: data.error,
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Have a great day',
                    text: data.message,
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        const userDetails = localStorage.getItem('user_details') ? JSON.parse(localStorage.getItem('user_details')) : null;
        if (userDetails !== null) {
            fetch(`http://localhost:4000/attendance/${userDetails.employee_id}`, {
                method: "get",
                headers: {
                    "auth-token": localStorage.getItem("user_token"),
                }
            })
                .then(res => res.json())
                .then((data) => {
                    setuser_Attendance(data.data)
                }).catch((err) => {
                    console.log(err)
                })
        }
    }, [])

    const handleCheck_in = () => {
        fetch('http://localhost:4000/user/check_in', {
            method: "post",
            headers: {
                "auth-token": localStorage.getItem('user_token')
            },
        }).then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: data.error,
                        footer: '<a href="">Why do I have this issue?</a>'
                    })
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: 'Have a great day',
                        text: data.message,
                        footer: '<a href="">Why do I have this issue?</a>'
                    })
                }
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="container mx-auto">
            <Head>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
            </Head>
            <div className="">
                {/* <div className="w-[5rem] fixed bottom-0 z-10 h-full bg-gradient-to-b from-blue-600 to-blue-400 ">
                    <ul className="pt-[2rem]">
                        <li className="text-3xl font-semibold text-gray-200 p-5 text-center"><i className="fas fa-calendar-check"></i></li>
                        <li className="text-3xl font-semibold text-gray-200 p-5 text-center"><i className="fas fa-comment-dots"></i></li>
                        <li className="text-3xl font-semibold text-gray-200 p-5 text-center"><i className="fas fa-envelope"></i></li>
                        <li className="text-3xl font-semibold text-gray-200 p-5 text-center"><i className="fab fa-medapps"></i></li>
                        <li className="text-3xl font-semibold text-gray-200 p-5 text-center"><i class="fas fa-cogs"></i></li>
                    </ul>
                </div> */}
                <div className="p-2">
                    <h1 className="font-bold text-3xl text-gray-600 mt-4 ml-5">Attendance Calendar</h1>
                    <div   className="shadow-lg p-4 rounded flex flex-row space-x-4">
                        <div className="rounded-xl w-[25%] text-center bg-gradient-to-b from-blue-600 to-blue-400 my-4">
                            <Link href="/myprofile">
                            <img className="object-cover mx-auto cursor-pointer rounded-full mt-4 w-[10rem] h-[10rem]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFkeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="propp" /></Link>
                            <p className="text-xl text-gray-100 pt-2 font-semibold">Laughing girl</p>
                            <p className="text-lg text-gray-100 py-2 font-semibold">fullstack-Developer</p>
                            <p className="text-lg text-gray-100 pb-2">senior-Developer</p>
                        </div>
                        <div className="w-[75%] p-6 relative">
                            <center>
                                <p className="text-lg text-gray-600 font-semibold">Current session</p>
                                <p className="text-4xl font-bold text-gray-800"><strong>0hrs 00mm</strong></p>
                            </center>
                            <div className="flex flex-row justify-between absolute bottom-0 w-full">
                                <button onClick={handleCheck_in} className="bg-green-600 text-gray-100 rounded-full font-semibold w-[8rem] h-[3rem] ">check-in</button>
                                <div className="dropdown-wrapper px-4">
                                    <button id="dropdown-toggle" onClick={handleCheck_out} className="bg-red-600 text-gray-100 rounded-full font-semibold w-[8rem] h-[3rem] ">check-out</button>
                                    <div className="dropdown-content bg-gray-300 shadow-lg  px-2 py-3 rounded-md  flex flex-col space-y-4">
                                        <button onClick={() => {
                                            setGeneral();
                                            handleCheck_out();
                                        }} className="bg-gray-600 rounded-full py-2  text-gray-50 px-4 mt-4 hover:bg-black transition-all duration-500">General</button>
                                        <button onClick={openOptional} className="bg-gray-600 rounded-full py-2  text-gray-50 px-4 hover:bg-black transition-all duration-500">Optional</button>
                                    </div>
                                    {optional && <div id="optional-text">
                                        <span onClick={closeOptional} className="float-right text-gray-100 text-2xl"><i className="far fa-times-circle"></i></span>
                                        <textarea onChange={(e) => {
                                            setReason(e.target.value)
                                        }} className="bg-gray-100 px-4 py-3 focus:outline-none" placeholder="Optional message" type="text" required></textarea>
                                        <button onClick={handleCheck_out} className="bg-gradient-to-r float-right from-green-300 to-green-600 text-gray-100 font-semibold px-4 py-1 my-2 rounded-full">submit</button>
                                    </div>}

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Table /> */}
                    {user_Attendance && <AttendanceTable user_Attendance={user_Attendance} />}
                </div>

            </div>
        </div>
    )
}

export default Dashboard
