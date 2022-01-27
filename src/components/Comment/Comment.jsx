import React, { useRef, useState, useEffect} from 'react';
import "./Comment.css"
import User1 from "../../images/profile-1.jpg"
import User2 from "../../images/profile-2.jpg"
import User3 from "../../images/profile-3.jpg"
import Aos from "aos";
import "aos/dist/aos.css";

const Comment = () => {
    useEffect (() => {
        Aos.init({duration: 2000});
   }, [] );

    const [active, setActive] = useState(false);
    const formRef = useRef();

   const titleChangeHandler = (e) => {
        e.preventDefault();
        const input = this.state.input;
        this.props.onSearchTermChange(input);
        this.setState({
          input: ''
        });
    }

  return <div className='Comment'>

       <div className='Comment-Section'>
                  <div className='Sections'>
                 
                  <div  className='Comment-Card'>
                    <div  data-aos="zoom-in-up" className='Comment-Cards'>
                    <div className='Quotes'> <p>“</p> </div>
                        <p> Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                       
                        <div className='Card-Founder' >
                            <div className='Founder-Img'>
                            <img src={User1} alt="" />
                            </div>
                             <div className='Founder-Info'>
                                 <h5>Satish Patel</h5>
                                 <h6>Founder & CEO, Huddle</h6>
                             </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className='Comment-Cards'>
                        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                        <div className='Card-Founder' >
                            <div className='Founder-Img'>
                            <img src={User2} alt="" />
                            </div>
                             <div className='Founder-Info'>
                                 <h5>Bruce McKenzie</h5>
                                 <h6>Founder & CEO, Huddle</h6>
                             </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className='Comment-Cards'>
                        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                        <div className='Card-Founder' >
                            <div className='Founder-Img'>
                            <img src={User3} alt="" />
                            </div>
                             <div className='Founder-Info'>
                                 <h5>Iva Boyd</h5>
                                 <h6>Founder & CEO, Huddle</h6>
                             </div>
                        </div>
                    </div>
            </div>
            </div>
         </div>

        <div className='Access'>
            <div data-aos="zoom-in-up" className='Access-Card'>
                <h2>Get early access today</h2>
                <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any  questions, our support team would be happy to help you.</p>
            
            <div className='Access-Input'>
                    <div class="inputbox">
                       <input ref={formRef} onChange={titleChangeHandler} type="text" placeholder='Email' required="required" />
                       <p className={active ? "ResultActive" : "Result"}>We will touch you very soon.</p>
                   </div>
                <button onClick={() => setActive(!active)}>
                    Get Started For Free</button>
                
               
            </div>
            </div>
        </div>
  </div>;
};

export default Comment;
