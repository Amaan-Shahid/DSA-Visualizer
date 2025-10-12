import React from 'react'
import '../styles/Navbar.css'
import moon from "../assets/theme-toggle.svg"

const Navbar = () => {
  return (
    <div className='navbar-div'>
      <div className="navbar-logo">
        <h1>DSA Visualizer</h1>
      </div>
      <div className="navbar-menu">
        <div className="theme-toggle-wrapper">
            <img className='theme-toggle' src={moon} alt="" />
        </div>
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
