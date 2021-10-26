import React, { useState } from "react";
import Link from "next/link";
import Swal from 'sweetalert2';

const UserDetails = ({ closeUserDetailsForm }) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/user/add_details', {
      method: 'post',
      headers: {
        "auth-token": localStorage.getItem('user_token'),
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(user_data)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.errors) {

          data.errors.map((error) => {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })

            Toast.fire({
              icon: 'failed',
              title: error.message
            })
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
  };

  return (
    <div className="absolute top-0 z-50 bg-gray-200 w-full">
      <div className="w-[50%] relative shadow-2xl mt-8 rounded-lg text-center mx-auto px-4 py-6">
        <span onClick={closeUserDetailsForm} className="float-right text-2xl"><i className="fas fa-times"></i></span>
        <center className="pb-8">
          <h1 className="text-4xl text-gray-600 font-semibold">
            Register the form
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
            placeholder="firstname"
            className="w-[50%] bg-gray-200 focus:outline-none  rounded-full border-2 border-gray-300 px-4 py-3"
          />
          <input
            value={lastname}
            onChange={(e) => {
              setlastname(e.target.value);
            }}
            type="text"
            placeholder="lastname"
            className="w-[50%] rounded-full focus:outline-none  border-2 border-gray-300 px-4 py-3 bg-gray-200"
          />
        </div>
        <input
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          type="email"
          placeholder="enter your email"
          className="w-[100%] rounded-full focus:outline-none  bg-gray-200 px-4 py-3 my-3 border-2 border-gray-300 mt-3"
        />
        <div className="flex flex-row gap-x-8 py-2">
          <input
            value={phonenumber}
            onChange={(e) => {
              setphonenumber(e.target.value);
            }}
            type="number"
            placeholder="phone number"
            className="w-[50%] bg-gray-200 focus:outline-none  rounded-full border-2 border-gray-300 px-4 py-3"
          />
          <input
            value={bloodgroup}
            onChange={(e) => {
              setbloodgroup(e.target.value);
            }}
            type="text"
            placeholder="blood group"
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
          placeholder="enter ur address"
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
              className="w-full rounded-full focus:outline-none  bg-gray-200 border-gray-300 px-4 py-3 border-2 mt-3"
            />
          </div>

          <div className="w-[50%]">
            <label className="block text-gray-600 font-semibold px-4">
              province
            </label>
            <select
              value={province}
              onChange={(e) => setprovince(e.target.value)}
              className="w-full rounded-full focus:outline-none bg-gray-200 border-gray-300 px-4 py-3 border-2 mt-3"
            >
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
            placeholder="emergency contact name"
            className="w-[50%] bg-gray-200 focus:outline-none  rounded-full border-2 border-gray-300 px-4 py-3"
          />
          <input
            value={ecnumber}
            onChange={(e) => setecnumber(e.target.value)}
            type="number"
            placeholder="emergency contact number"
            className="w-[50%] rounded-full focus:outline-none  border-2 border-gray-300 px-4 py-3 bg-gray-200"
          />
        </div>
        <div className="w-[50%] justify-start mb-4">
          <label className="block text-gray-600 font-semibold px-4 float-left">
            joining date
          </label>
          <input
            value={joiningdate}
            onChange={(e) => setjoiningdate(e.target.value)}
            type="date"
            className="w-full rounded-full focus:outline-none  bg-gray-200 border-gray-300 px-4 py-3 border-2 mt-3"
          />
        </div>

        <p className="text-xs text-gray-600">
          By clicking Sign Up, you agree to our
          <Link href="#">
            <a className="text-blue-600 ml-1">Terms</a>
          </Link>
          ,
          <Link href="#">
            <a className="text-blue-600 mx-1">Data Policy</a>
          </Link>
          and
          <Link href="#">
            <a className="text-blue-600 ml-1">Cookies Policy</a>
          </Link>
          . You may receive SMS Notifications from us and can opt out any time.
        </p>
        <button
          onClick={handleSubmit}
          className="w-[50%] mt-4 px-3 hover:scale-x-110 hover:transform transition-all duration-500 bg-purple-600 rounded-full text-lg font-semibold text-gray-100 py-2"
          type="submit"
        >
          Register
        </button>
        <p className="mt-2">
          Already have an account.?
          <Link href="/sign_in">
            <a className="text-blue-600 ml-2">login here.</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
