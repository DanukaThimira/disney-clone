import React from 'react'
import logoOne from '../img/cta-logo-one.svg'
import './Footer.css'
import logoTwo from '../img/viewers-disney.png'

function Footer() {
  return (
    <div>
        <div className='section-one'>
           <img className='logo-one' src={logoOne}/>
            <p>Discover the world's best stories across<br/>Disney+,Hulu, and ESPN+ with the Disney bundle.</p>
            <a>Get All 3</a>
        </div>
        <div className='section-two'>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        </div>
        <div className='section-three'>
          <div className='logo-disney'>
            <img src={logoTwo} />
            </div>
            <div className='line-one lines'>
              <p>
                <a>About Disney</a>
                <a>Disney Help</a>
                <a>Careers</a>
                <a>Contact Us</a>
                <a>Advertise With Us</a>
                
              </p>
            </div>
            <div className='line-two lines'>
              <p>
                <a>About Disney</a>
                <a>Disney Help</a>
                <a>Careers</a>
                <a>Contact Us</a>
                <a>Advertise With Us</a>
          
              </p>
            </div>
            <div className='line-three lines'>
              <p>
                <a>About Disney</a>
                <a>Disney Help</a>
              </p>
            </div>
            <div className='line-four'>
              <p><a>&copy;, All Right Reserved, Disney Entertainment</a></p>
            </div>
          
        </div>
    </div>
  )
}

export default Footer