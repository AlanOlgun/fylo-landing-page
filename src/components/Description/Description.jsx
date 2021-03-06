import React, { useEffect } from 'react';
import "./Description.css"

import Desc from "../../images/bg-curvy-desktop.svg"
import Access from "../../images/icon-access-anywhere.svg"
import Security from "../../images/icon-security.svg"
import Collaboration from "../../images/icon-collaboration.svg"
import AnyFile from "../../images/icon-any-file.svg"


import Aos from "aos";
import "aos/dist/aos.css";

const Description = () => {
       
  useEffect (() => {
    Aos.init({duration: 2000});
}, [] );


  return <div className='Desc'>
     {/* <div className='Curvy'>
         <img src={Desc} alt="" />
     </div> */}
       <div className='Desc-Card'>
           <div data-aos="zoom-in-up"  className='Card-Section'> 
             
              <div className='Cards'>
                  <div className='Cards-Icon' >
                  <img src={Access} alt="" /></div>
                    <h3>Access your files, anywhere</h3>
                    <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
              </div>
              <div className='Cards'>
                  <div className='Cards-Icon' >
                  <img src={Security} alt="" /></div>
                    <h3>Security you can trust</h3>
                    <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files. </p>
              </div>
              <div className='Cards'>
                  <div className='Cards-Icon' >
                  <img src={Collaboration} alt="" /></div>
                    <h3>Real-time collaboration</h3>
                    <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
              </div>
              <div className='Cards'>
                  <div className='Cards-Icon' >
                  <img src={AnyFile} alt="" /></div>
                    <h3>Store any type of file</h3>
                    <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
              </div>
              
           </div>

       </div>
  </div>;
};

export default Description;
