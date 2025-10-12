import React from 'react'
import '../styles/explore.css'
import sorting from "../assets/sorting.png"
import search from "../assets/search.png"
import spider from "../assets/spider.png"
import notepad from "../assets/notepad.png"

const Explore = () => {
  return (
    <div className='explore-div'>
      <h2 className="explore-heading">
        Explore Algorithm Categories
      </h2>
      <div className="cards">
        <div className="card">
            <div className="icon-wrapper">
                <img src={sorting} alt="" />
            </div>
            <div className="content">
                <h3>Sorting Algorithms</h3>
                <p>Visualize how different sorting algorithms organize data efficiently.</p>
            </div>
            <div className="category">
                <span>Bubble Sort</span>
                <span>Merge Sort</span>
                <span>Quick Sort</span>
            </div>
        </div>

        <div className="card">
            <div className="icon-wrapper">
                <img src={search} alt="" className='search-icon' />
            </div>
            <div className="content">
                <h3>Searching Algorithms</h3>
                <p>Explore techniques for finding elements in data structures.</p>
            </div>
            <div className="category">
                <span>Linear Search</span>
                <span>Binary Search</span>
            </div>
        </div>

        <div className="card">
            <div className="icon-wrapper">
                <img src={spider} alt="" />
            </div>
            <div className="content">
                <h3>Graph Algorithms</h3>
                <p>Understand traversal and pathfinding in graph structures.</p>
            </div>
            <div className="category">
                <span>BFS</span>
                <span>DFS</span>
                <span>Dijkstra</span>
            </div>
        </div>

        <div className="card">
            <div className="icon-wrapper">
                <img src={notepad} alt="" />
            </div>
            <div className="content">
                <h3>String Algorithms</h3>
                <p>Learn pattern matching and string manipulation techniques.</p>
            </div>
            <div className="category">
                <span>KMP</span>
                <span>Rabin Karp</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
