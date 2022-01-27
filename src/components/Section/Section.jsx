import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "./Section.css"
import WorkImg from "../../images/illustration-stay-productive.png"
import Arrow from "../../images/icon-arrow.svg"

const Section = () => {
  useEffect (() => {
    Aos.init({duration: 0.1});
}, [] );


  return <div className='Section'>
  <div data-aos="zoom-in-up" className='Work-Section'>

      <div className='Work-Img' >
            <img src={WorkImg} alt="" />
      </div>
         <div className='Work-Paragraf'>
           <div className='Paragraf'>
             <h2>Stay productive,
              wherever you are</h2>
             <p>Never let location be an issue when accessing your files. Fylo has you
             covered for all of your file storage needs.</p>
             <p>Securely share files and folders with friends, family and colleagues for live
             collaboration. No email attachments required.</p>

             <div className='Work-Link'>
                  <a href="">See how Fylo works </a>
                  <div className='Work-Icon'>
                  <img src={Arrow} alt="" />
                  </div>
             </div> 
             </div>
                </div>
              
      </div>

  </div>;
};


export default Section;
