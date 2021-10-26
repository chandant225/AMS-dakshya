import React, { useEffect, useState } from 'react'
import Attendancerecord from './attendance_record';

const Table = () => {
    const [user_Attendance , setuser_Attendance] = useState('');
  
    useEffect(() => {
        const userDetails = localStorage.getItem('user_details') ? JSON.parse(localStorage.getItem('user_details')) : null;
       
        console.log(userDetails)
        if(userDetails !== null){
            fetch(`http://localhost:4000/attendance/${userDetails.employee_id}`,{
                method:"get",
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
    },[])


  
      
  

   
    return (
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
           
            <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 pb-[4rem] rounded-bl-lg rounded-br-lg">
                <table  id="attendance_table" className="min-w-full">
                    <thead>
                        <tr>
                      
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Date</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Name</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Check-in time</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Check-out time</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Reason</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">action</th>
                          
                     
                            <th className="px-6 py-3 border-b-2 border-gray-300"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                  {user_Attendance && user_Attendance.map((attendance) => (
                           <Attendancerecord attendance={attendance} />
                  ))}
                    </tbody>
                </table>
                <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
                    <div>
                        <p className="text-sm leading-5 text-blue-700">
                            Showing
                            <span className="font-medium">1</span>
                            to
                            <span className="font-medium">200</span>
                            of
                            <span className="font-medium">2000</span>
                            results
                        </p>
                    </div>
                    <div>
                        <nav className="relative z-0 inline-flex shadow-sm">
                            <div>
                                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Previous" >
                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a href="#" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                                    1
                                </a>
                                <a href="#" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                                    2
                                </a>
                                <a href="#" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                                    3
                                </a>
                            </div>
                            <div v-if="pagination.current_page < pagination.last_page">
                                <a href="#" className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Next">
                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table
