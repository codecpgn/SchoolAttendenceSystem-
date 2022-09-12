import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from './../image/Logo.png';
const List = () => {
  return (
    <>
    <header>
        <div className="container container-flex">
        <div className="logoContainer">
            <img src={Logo} alt="logo" className='logo'/>
        </div>
        <nav>
            <div className="list">
           <NavLink to="listItem">Home</NavLink>
           <NavLink to="/about" className="listItem">About</NavLink>
           <NavLink to="/services" className="listItem">Services</NavLink>
           <NavLink to="/contact" className="listItem">Contact</NavLink>
           <NavLink to="/about" className="listItem">About</NavLink>
           </div>
        </nav>

        </div>
    </header>
    </>
  )
}

export default List
