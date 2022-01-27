import React from 'react';
import "./Footer.css"
import FooterLogo from "../../images/logo.svg"
import Location from "../../images/icon-location.svg"
import Phone from "../../images/icon-phone.svg"
import Email from "../../images/icon-email.svg"
import Facebook from "../../images/facebook-f-brands.svg"
import Twitter from "../../images/twitter-brands.svg"
import Instagram from "../../images/instagram-brands.svg"

const Footer = () => {
  return <div className='Footer'>

   <div className='Footer-Logo'>
    <img src={FooterLogo} alt="" />
   </div>
   
   <div className='Footer-Section'>
       <div className='Footer-Title'>
           <div className='Map-Icon'>
           <img src={Location} alt="" />
           </div>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
       </div>
    <div className='Footer-Info'> 
    <div className='Info'>
         <img src={Phone} alt="" />
         <p>+1-543-123-4567 </p>
         </div>
         <div className='Info'>
         <img src={Email} alt="" />
         <p>example@fylo.com </p>
         </div>
     </div>
     
     <div className='Footer-Link'>
         <a className='Link' href="">About Us</a>
         <a className='Link' href="">Jobs</a>
         <a className='Link' href="">Press</a>
         <a className='Link' href="">Blog</a>
     </div>
     <div className='Footer-Link'>
         <a className='Link' href="">Contact Us</a>
         <a className='Link' href="">Terms</a>
         <a className='Link' href="">Privacy </a>
     </div>
     <div className='Footer-Social'>
           <div className='Social-Icon'>
           <img src={Facebook} alt="" />
           </div>

           <div className='Social-Icon'>
           <img src={Twitter} alt="" />
           </div>

           <div className='Social-Icon'>
           <img src={Instagram} alt="" />
           </div>
     </div>
   </div>

   <div className='Builder'>
       <h5>Bulit by <span > <a href="www.alanolgun.com">Alan Olgun</a>
       </span>  © 2022</h5>
   </div>
  </div>;
};

export default Footer;
