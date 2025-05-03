import React from "react";
import './LoginSignup.css'
import email_icon from './email.webp'
import user_icon from './images.png'
import password_icon from './password.png'
const LoginSignup= () =>{
    return(
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
                <div className="inputs">
                    <div className="input">
                        <img src= {user_icon} alt=""></img>
                        <input type=""></input>
                    </div>

                    <div className="input">
                        <img src={email_icon} alt=""></img>
                        <input type="email"></input>
                    </div>

                    <div className="input">
                        <img src={password_icon} alt=""></img>
                        <input type="password"></input>
                    </div>

                </div>
            </div>

        </div>
    )
}