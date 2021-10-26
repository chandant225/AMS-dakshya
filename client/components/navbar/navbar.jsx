import React from "react";
import Head from 'next/head'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="container sticky top-0 z-40 bg-gray-50 mx-auto shadow-md rounded">
      <Head>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
      </Head>
      <div className="flex flex-row justify-between items-center py-4">
        <Link href="/user_dashboard">
          <div className="logo-wrapper cursor-pointer flex flex-row ">
            <img
              src="/dakshya-icon.svg"
              alt="dkashya-icon"
              className="object-contain w-[4rem] h-[3rem]"
            />
            <h1 className="text-4xl font-semibold text-gray-600">EMS-Dakshya</h1>
          </div>
        </Link>
        <nav className="text-sm font-semibold">
          <ul>
            <li className="inline-block mr-4">menu</li>
            <li className="inline-block mr-4">menu</li>
            <li className="inline-block mr-4">menu</li>
            <li className="inline-block mr-4">menu</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
