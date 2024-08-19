import React, {useState} from "react";
import './Login.css'
import user_icon from '../assets/person.png'
import key_icon from '../assets/password.png'
import mail_icon from '../assets/email.png'

const Login = () => {
    const [action, setAction] = useState("Login")
    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"? <div></div> :
                <div className="input">
                    <img src={user_icon} alt="user icon"/>
                    <input type="text" placeholder="Name"/>
                </div>
                }
                <div className="input">
                    <img src={mail_icon} alt="email icon"/>
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="input">
                    <img src={key_icon} alt="password icon"/>
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            {action==="Sign Up" ? <div></div> :
            <div className="forgot-password">Lost password? <span>Click here!</span>
            </div>
            }
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}

export default Login;