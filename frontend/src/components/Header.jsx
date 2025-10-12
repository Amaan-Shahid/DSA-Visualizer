import React from 'react'
import '../styles/header.css'
import arrow from "../assets/arrow.svg"

const Header = () => {
  return (
    <div className='header-div'>
      <h2 className='header-heading'>Master Data Structures & Algorithms</h2>
      <p className='header-para'>Interactive visualizations that bring algorithms to life. Watch, learn, and understand how they work step-by-step.</p>
      <button className="header-btn">Start Visualizing <img src={arrow} alt="" /></button>
    </div>
  )
}

export default Header
