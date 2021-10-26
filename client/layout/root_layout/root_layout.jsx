import React from "react";
import { Footer, Navbar } from "../../components";
import {useRouter} from "next/router"

const Root_layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
    <Navbar />
      
      {children}
      <Footer />
    </>
  );
};

export default Root_layout;
