import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='nav'>

       <img src="https://iskconmumbaipull-21250.kxcdn.com/bi_theme_snippets/static/src/img/logo-black-header.png" alt="logo" width={50} height={50}
         />
        <h3>ISKCON</h3>
      
        <div className='btn'>
        <Link id="ele" to="/">Home</Link>
        <Link id="ele" to="/About">About</Link>
        <Link id="ele" to="/Contact">Contact</Link>
        <Link id="ele" to="/ServicesPage">Service</Link>
        <div className="dropdown">
            <span id="ele">Login</span>
           <div className="dropdown-content">
            <p><Link id='drop-item' to="/AdminLogin">Admin</Link></p>
            <p><Link id='drop-item' to="/VolenteerLogin">Volenteer</Link></p>
           </div>
        </div>
        <div className="dropdown">
            <span id="ele">SignUp</span>
           <div className="dropdown-content">
            <p><Link id='drop-item' to="/AdminSignUp">Admin</Link></p>
            <p><Link id='drop-item' to="/VolenteerSignUp">Volenteer</Link></p>
           </div>
        </div>
        
      
        </div>

    </div>
  )
}