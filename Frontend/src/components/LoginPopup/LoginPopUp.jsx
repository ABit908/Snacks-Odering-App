import React from 'react'
import { useState } from 'react'
import { assets } from '../../assets/assets'
import './LoginPopUp.css'
const LoginPopUp = ({setShowLogin}) => {
  const [curState,setCurState]=useState("Login")
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{curState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {curState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
           <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{curState==="Sign Up"?"Create Account":"Login"}</button>
        <div>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        </div>
        {curState=="Login"
        ?<p>Create a new Account? <span onClick={()=> setCurState("Sign Up")}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=> setCurState("Login")}>Login here</span></p>}
        
        
      </form>
    </div>
  )
}

export default LoginPopUp
