import React from 'react'
import SignupForm from './SignupForm';
import signupimg from '../../assets/images/signup1.png'
import './signup.css'


export default function Signup() {
    return (
        <div>
             <section id="about" className="about">
            <div className="container">
          
              <div className="row no-gutters">
                <div className="col-lg-5 video-box">
          
                
                  
                <img src={signupimg}  className="img-fluid" alt="login image" />
                  
                  
                </div>
          
                <div className="col-lg-6 d-flex flex-column justify-content-center about-content">
          
                  <div className="section-title">
                    <h2 className="sectiontext">Sign Up Here</h2>
                    <p></p>
                  </div>
                  <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                    
                  <SignupForm/>
                  </div>
          
            
          
                  
          
          
                
          
            </div>
            </div>
            </div>
          </section>
        </div>
    )
}


