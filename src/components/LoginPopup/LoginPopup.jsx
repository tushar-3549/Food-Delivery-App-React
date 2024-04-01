import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState("Login")
    return (
        <div className='login-popup'>
            <form action="" className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img style={{cursor: "pointer"}} onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {
                        currState === "Login" ? <></> : <input type="text" placeholder='Your name' required />
                    }

                    <input type="emsil" placeholder='Your email' required />
                    <input type="password" placeholder='Your password' required />
                </div>
                <button>{currState === "Sign Up" ? "Create account" : "Log in"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" />
                    <p>By continuing, I agree to the term of use & privacy policy.</p>
                </div>
                {
                    currState === "Login"
                        ?
                        <p>Create a new account ? <span style={{cursor: "pointer"}} onClick={()=> setCurrState("Sign Up")}>Click here</span></p>
                        :
                        <p>Already have an account ? <span style={{cursor: "pointer"}} onClick={()=> setCurrState("Login")}>Login here</span></p>
                }

            </form>
        </div>
    )
}

export default LoginPopup