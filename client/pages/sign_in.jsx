import React from "react";
import Link from "next/link";

const Sign_in = () => {
  return (
    <div>
      <div className="flex flex-row justify-center space-x-12">
        <div className="flex flex-col justify-center w-[30%]">
          <h1 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">
            EMS-DAKSHYA
          </h1>
          <p className="text-2xl font-medium mt-4 text-gray-600">
            An easier and quicker way to start your day
          </p>
        </div>
        <div className="text-center shadow-xl rounded-xl p-6 w-[40%] mt-20">
          <form>
            <input
              type="text"
              placeholder="enter your email"
              className="w-[100%] bg-gray-200 rounded-full mt-4 border-2 border-gray-300 px-4 py-3"
            />
            <input
              type="password"
              placeholder="enter your password"
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

export default Sign_in;
