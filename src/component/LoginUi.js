import "./style/LoginUi.css"
import profile from "./../image/a.png";
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
import React from 'react'
import { useNavigate,Link } from "react-router-dom";
import Navbar from "./Navbar";
const LoginUi = () => {
  const navigate=useNavigate();
  return (
    <>
    <Navbar/>
    <div>
      <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
           </div>
         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> Or <Link to={"/register"}>Sign Up</Link>
            </p>
 
         </div>
       </div>
     </div>
    </div>
    </div>
    </>
  )
}

export default LoginUi

/*
export default LoginUi;
import React from 'react'
import Navbar from './Navbar'
const LoginUi = () => {
  return (
    <div>
    <Navbar/>
      tis his S 
    </div>
  )
}

export default LoginUi
*/