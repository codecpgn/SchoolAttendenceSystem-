import "./style/LoginUi.css"
import profile from "./../images/a.png";
import email from "./../images/email.jpg";
import pass from "./../images/pass.png";
import name from "./../images/name.png";
import phone from "./../images/phone.png";
import React,{useState} from 'react';
import {Link } from "react-router-dom";


const users={
    Name:"",
    Email:"",
    Password:"",
    Phone:""
}
const LoginUi = () => {
  // const navigate=useNavigate();

 const [user,setuser]=useState(users)
 const push=(e)=>{
    console.log(user)
    setuser({...user,[e.target.name]:e.target.value})
 }
  return (
    <>
  
    <div>
      <div className="main">
     <div className="sub-main"style={{"height":"590px"}}>
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
           </div>
         </div>
         <div>
           <h1>Login Page</h1>
           <div className="second-input" style={{"margin":"20px"}}>

             <img src={name} alt="Name" className="email"/>
             <input onChange={push} name="Name" type="text"  placeholder="Enter your name" className="name" />
           </div>
           <div>
             <img src={email} alt="Email" className="email"/>
             <input  onChange={push} type="email" placeholder="Enter your Email" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input  onChange={push} type="password" placeholder="Enter your password" className="name"/>
           </div>
           <div className="second-input">
             <img src={phone} alt="phone" className="email"/>
             <input onChange={push} type="phone" placeholder="Enter your phone" className="name"/>
           </div>
           
          <div className="login-button">
          <button onClick="">Sign Up</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a>
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
