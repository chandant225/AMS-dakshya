import React, { useState } from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import Swal from 'sweetalert2'

const Userlogin = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const router = useRouter();

 
     
  const loginData = {
    email,
    password,
  }

   const handleLogin = (e) => {
     e.preventDefault();
     fetch('http://localhost:4000/user_auth/login', { 
       method: 'post',
       headers: {
         'Content-Type':'application/json'
       },
       body: JSON.stringify(loginData)
     }).then((res) => res.json())
     .then((data) => {
      if(data.error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data.error,
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }else {
        localStorage.setItem("user_token", data.token)
        localStorage.setItem("user_details", JSON.stringify(data.user))
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
          icon: 'success',
          title: 'Signed in successfully'
        })
        router.push('/user_dashboard')
      }
   
     }).catch((err) => {
       console.log(err)
     })
   }
  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-center items-center space-x-12">
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
        <div className="text-center shadow-xl rounded-xl p-6 w-[40%] mt-20">
          <form onSubmit={handleLogin}>
            <input
            value = {email}
              onChange = {(e) => {
                setemail(e.target.value)
              }}
              required
              type = "email"
              placeholder = "enter your email"
              className = "w-[100%] bg-gray-200 rounded-full mt-4 border-2 border-gray-300 px-4 py-3"
            />
            <input
            value = {password}
            onChange={(e) => setpassword(e.target.value)}
            required
              type = "password"
              placeholder ="enter your password"
              className="w-[100%] bg-gray-200 rounded-full border-2 mt-4 border-gray-300 px-4 py-3"
            />
            <button
           
              className="w-[50%] mt-6 px-3 hover:scale-x-110 hover:transform transition-all duration-500 bg-purple-600 rounded-full text-lg font-semibold text-gray-100 py-2"
              type="submit"
            >
              sign in
            </button>
          </form>

          <p className="text-blue-600 font-semibold text-lg mt-4 cursor-pointer">
            Forgot password.?
          </p>
          <hr className="border-[1px] mt-2 w-full mx-auto text-gray-700"></hr>
          <Link href="/sign_up">
            <button className="w-[50%] mt-6 px-3 hover:scale-x-110 hover:transform transition-all duration-500 bg-green-600 rounded-full text-lg font-semibold text-gray-100 py-2">
              Create New Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Userlogin;
