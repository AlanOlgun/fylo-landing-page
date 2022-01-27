import "./Intro.css"
import intro from "../../images/illustration-intro.png"
import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Desc from "../../images/bg-curvy-desktop.svg"

const Intro = () => {
    
     useEffect (() => {
          Aos.init({duration: 2000});
     }, [] );

  return <div className="Main-Container"> 

  <div data-aos="zoom-in-up" className="Main-Img">
      <img src={intro} alt="" /> 
 </div>

  <div data-aos="zoom-in-up" className="Main-Title">
       <h3>All your files in one secure location, accessible anywhere.</h3>
       <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
       <button>Get Started</button>
  </div>
  </div>;
};

export default Intro;
