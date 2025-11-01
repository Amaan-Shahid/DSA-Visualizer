import React from 'react'
import "../styles/SelectAlgo.css"
import upDown from "../assets/up-down.png"
import search from "../assets/search.png"
import spider2 from "../assets/spider2.png"
import notepad from "../assets/notepad.png"
import toggle from "../assets/play.png"

const SelectAlgo = () => {
  return (
    <div className='select-algo-div'>
      <h2>ALGORITHMS</h2>
      <div>
        <h3><div><img src={upDown} alt="" />Sorting</div> <img src={toggle} className='toggle-btn' alt="" /></h3>
        <h4>Bubble Sort</h4>
        <h4>Merge Sort</h4>
        <h4>Quick Sort</h4>
      </div>
      <div>
        <h3><div><img src={search} alt="" />Searching</div> <img src={toggle} className='toggle-btn' alt="" /></h3>
        <h4>Linear Search</h4>
        <h4>Binary Search</h4>
      </div>
      <div>
        <h3><div><img src={spider2} alt="" />Graphs</div> <img src={toggle} className='toggle-btn' alt="" /></h3>
        <h4>BFS</h4>
        <h4>DFS</h4>
      </div>
      <div>
        <h3><div><img src={notepad} alt="" />Strings</div> <img src={toggle} className='toggle-btn' alt="" /></h3>
        <h4>KMP</h4>
        <h4>Rabin-Karp</h4>
      </div>
    </div>
  )
}

export default SelectAlgo
