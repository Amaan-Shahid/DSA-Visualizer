import React from 'react'
import '../styles/header.css'
import arrow from "../assets/arrow.svg"
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-div'>
      <h2 className='header-heading'>Master Data Structures & Algorithms</h2>
      <p className='header-para'>Interactive visualizations that bring algorithms to life. Watch, learn, and understand how they work step-by-step.</p>
      <Link className='link' to="/visualizer"><button className="header-btn">Start Visualizing <img src={arrow} alt="" /></button></Link>
    </div>
  )
}

export default Header
