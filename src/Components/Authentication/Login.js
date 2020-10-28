import React from 'react'
import LoginForm from './LoginForm';
import loginimg from '../../assets/images/login1.gif'
import './login.css'


export default function Login() {
    return (
        <div>
             <section id="about" className="about">
            <div className="container">
          
              <div className="row no-gutters">
                <div className="col-lg-5 video-box">
          
                
                  
                <img src={loginimg}  className="img-fluid" alt="login image" />
                  
                  
                </div>
          
                <div className="col-lg-6 d-flex flex-column justify-content-center about-content">
          
                  <div className="section-title">
                    <h2 className="sectiontext">Login Here</h2>
                    <p></p>
                  </div>
                  <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                    
                  <LoginForm/>
                  </div>
          
            
          
                  
          
          
                
          
            </div>
            </div>
            </div>
          </section>
        </div>
    )
}


