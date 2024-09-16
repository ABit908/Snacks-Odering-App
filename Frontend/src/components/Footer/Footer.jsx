import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            {/* <img src={} alt="" /> */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequatur voluptate, pariatur vel eveniet commodi fuga soluta non mollitia itaque voluptates quas officiis quis quibusdam enim dolorum quisquam libero dolores.</p>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
                <h2>CONTACT US</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@tomato.com</li>
                </ul>
        </div>
        
      </div>
      <hr />
      <p className='footer-copyright'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2023-2024 © Tomato Ltd. All rights reserved.</p>
    </div>
  )
}

export default Footer
