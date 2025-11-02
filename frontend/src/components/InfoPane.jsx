import React from "react";
import "../styles/InfoPane.css";
import flash from "../assets/flash.png";
import clipboard from "../assets/clipboard.png";

const InfoPane = ({ pseudocode, complexity }) => {
  return (
    <div className="InfoPane-div">
      <div className="pseudocode-div">
        <h2><img src={clipboard} alt="" />Pseudocode</h2>
        <pre>
          {pseudocode.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </pre>
      </div>

      <div className="complexity-div">
        <h2><img src={flash} alt="" />Time Complexity</h2>
        <ul>
          <li><b>Best Case</b> {complexity.best}</li>
          <li><b>Average Case</b> {complexity.average}</li>
          <li><b>Worst Case</b> {complexity.worst}</li>
          <li><b>Space:</b> {complexity.space}</li>
        </ul>
      </div>
    </div>
  );
};

export default InfoPane;
