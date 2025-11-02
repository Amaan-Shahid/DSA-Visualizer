import React, { useState } from 'react';
import "../styles/Visual.css";

const Visual = () => {
  // State to track selected speed
  const [selectedSpeed, setSelectedSpeed] = useState("Normal");

  // Speed options
  const speeds = ["Slow", "Normal", "Fast", "Very Fast"];

  return (
    <div className='visual-div'>
        <div className="title-div">Bubble Sort</div>   
        <div className="main-visual-div"></div> 

        <div className="controls-div">
            <div className='main-control'>
                <button className='play'>Play</button>
                <button>Next Step</button>
                <button className='reset'>Reset</button>
            </div>

            <div className='speed-control'>
                <span>Speed:</span>
                {speeds.map((speed) => (
                  <button
                    key={speed}
                    className={selectedSpeed === speed ? "selected" : ""}
                    onClick={() => setSelectedSpeed(speed)}
                  >
                    {speed}
                  </button>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Visual;
