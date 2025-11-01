import React from 'react'
import Navbar from "../components/Navbar"
import SelectAlgo from '../components/SelectAlgo'

const Visualizer = () => {
  return (
    <div>
      <Navbar />
      <div className="visualization-div">
        <SelectAlgo />
      </div>
    </div>
  )
}

export default Visualizer
