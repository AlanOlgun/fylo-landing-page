import "./Navbar.css"
import Logo from "../../images/logo.svg"
import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {

  
   useEffect (() => {
    Aos.init({duration: 2000});
}, [] );



  return <div  className="Navbar">
       <div  data-aos="fade-right" className="Navbar-Logo">
         <img src={Logo} alt=""/> </div>
       <div data-aos="fade-left" className="Navbar-Link">
          <a href="#">Features</a>
          <a href="#">Team</a>
          <a href="#">Sign In</a>
       </div>
  </div>;
};

export default Navbar;

