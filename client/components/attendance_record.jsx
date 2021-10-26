import React,{useState} from 'react'

const Attendancerecord = ({attendance}) => {
    const [reason, setReason] = useState('');
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
        attendance_id: attendance.attendance_id
     }

    const handleCheck_out = () => {
        fetch(`http://localhost:4000/user/check_out`, {
            method: 'post',
            headers: {
                "auth-token": localStorage.getItem('user_token'),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(checkOut_data)
        }).then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <tr>
                       
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
            <div className="text-sm leading-5 text-blue-900">{attendance.date} </div>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{attendance.name}</td>
        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{attendance.checkIn_time}</td>
  
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{attendance.checkOut_time}</td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{attendance.reason}</td>
        <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
        <div className="dropdown-wrapper px-4">
                <button id="dropdown-toggle" onClick={handleCheck_out} className="bg-red-600 text-gray-100 rounded-full font-semibold w-[8rem] h-[3rem] ">check-out</button>
                <div className="dropdown-content bg-gray-300 shadow-lg  px-2 py-3 rounded-md  flex flex-col space-y-4">
                    <button onClick={() => {
                        setGeneral();
                        handleCheck_out();
                    }} className="bg-gray-600 rounded-full py-2  text-gray-50 px-4 mt-4 hover:bg-black transition-all duration-500">General</button>
                    <button onClick={openOptional} className="bg-gray-600 rounded-full py-2  text-gray-50 px-4 hover:bg-black transition-all duration-500">Optional</button>
                </div>
                {optional &&   <div id="optional-text">
                    <span onClick={closeOptional} className="float-right text-gray-100 text-2xl"><i className="far fa-times-circle"></i></span>
                    <textarea onChange={(e) => {
                        setReason(e.target.value)
                    }} className="bg-gray-100 px-4 py-3 focus:outline-none" placeholder="Optional message" type="text" required></textarea>
                    <button onClick={handleCheck_out} className="bg-gradient-to-r float-right from-green-300 to-green-600 text-gray-100 font-semibold px-4 py-1 my-2 rounded-full">submit</button>
                </div>}
              
            </div>
        </td>
    </tr>
    )
}

export default Attendancerecord
