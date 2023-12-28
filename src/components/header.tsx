'use client'
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import Signup from "./signup";
import Alert from "./alert";

const Header = () => {
  const [user, setUser] = useState();
  
  const acountHandler= () => {
    // console.log('Acount Handler');
    if(user){
    // console.log("Acount Handler True");
  }else{
      document.getElementById('signupDialog').showModal();
    }
  } 
  // let headr = document.getElementById("main-header");
  // let headrLength=headr?.offsetHeight;
  return (
    <div
      id="main-header"
      className="bg-background text-text border-b border-primary p-4 flex justify-between items-center"
    >
      <FontAwesomeIcon icon={faBars} className="h-12" />
      <Alert
        type="error"
        message="bg-background"
      ></Alert>
      <FontAwesomeIcon
        icon={faUser}
        onClick={acountHandler}
        className="h-12 p-1 border rounded rounded-t-2xl border-primary shadow-sm shadow-primary"
      />
      <Signup />
    </div>
  );
};

export default Header;
