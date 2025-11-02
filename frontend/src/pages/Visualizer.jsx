import React from 'react'
import Navbar from "../components/Navbar"
import SelectAlgo from '../components/SelectAlgo'
import InfoPane from "../components/InfoPane"
import Visual from "../components/Visual.jsx"
import "../styles/Visualizer.css"

const Visualizer = () => {
  return (
    <div>
      <Navbar />
      <div className="visualization-div">
        <SelectAlgo />
        <Visual />
        <InfoPane />
      </div>
    </div>
  )
}

export default Visualizer
