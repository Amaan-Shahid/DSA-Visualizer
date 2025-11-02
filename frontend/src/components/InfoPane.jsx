import React from 'react'
import "../styles/InfoPane.css"
import flash from "../assets/flash.png"
import clipboard from "../assets/clipboard.png"

const InfoPane = () => {
  return (
    <div className='InfoPane-div'>
      <div className="pseudocode-div">
        <h2><img src={clipboard} alt="" />Pseudocode</h2>
      </div>
      <div className="complexity-div">
        <h2><img src={flash} alt="" />Time Complexity</h2>
      </div>
    </div>
  )
}

export default InfoPane
