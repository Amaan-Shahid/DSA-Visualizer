import React from 'react'
import '../styles/Navbar.css'
import moon from "../assets/theme-toggle.svg"
import logo from "../assets/logo.png"
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-div'>
      <Link to='/' className='link'>
      <div className="navbar-logo">
        <img src={logo} alt="" className="logo" />
        <h1>DSA Visualizer</h1>
      </div>
      </Link>
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
