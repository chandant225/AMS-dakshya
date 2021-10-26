import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

const UserRegistration = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const userData = {
    firstname,
    lastname,
    email,
    password,
    confirmpassword,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:4000/user_auth/register",
      userData
    );
    console.log(response);
  };

  return (
    <div className="container mx-auto">
      <div className="relative flex flex-row justify-between items-center space-x-4   mt-8 rounded-lg text-center px-4 py-6">
        <div className="flex flex-col justify-center w-[40%]">
          <div className="flex flex-row justify-center items-center space-x-4">
            <img
              src="/dakshya-icon.svg"
              alt="dakshya-icon"
              className="object-contain w-[40%]"
            />
            <h1 className="text-5xl font-semibold">EMS-DAKSHYA</h1>
          </div>

          <p className="text-2xl font-medium mt-4 text-gray-600">
            An easier and quicker way to manage your employee
          </p>
        </div>
        <div className="w-[50%] shadow-2xl rounded px-4 py-6">
          <center className="pb-8">
            <h1 className="text-4xl text-gray-600 font-semibold">
              Employee registration form
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
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            type="password"
            placeholder="enter new password"
            className="w-[100%] rounded-full focus:outline-none  bg-gray-200 px-4 py-3 my-3 border-2 border-gray-300 mt-3"
          />
          <input
            value={confirmpassword}
            onChange={(e) => {
              setconfirmpassword(e.target.value);
            }}
            type="password"
            placeholder="confirm password"
            className="w-[100%] rounded-full focus:outline-none  bg-gray-200 border-gray-300 my-3 px-4 py-3 border-2 mt-3"
          />
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
            . You may receive SMS Notifications from us and can opt out any
            time.
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
    </div>
  );
};

export default UserRegistration;
